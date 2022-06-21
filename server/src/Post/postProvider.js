const baseResponseStatus = require("../../config/baseResponseStatus");
const { basicResponse, resultResponse } = require("../../config/response");
const { pool } = require("../../config/database");
const postDao = require("./postDao");
const commentDao = require("../Comment/commentDao");

//전체 게시물 가져오기
exports.getPosts = async () => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const getPostsResult = await postDao.getPosts(connection);
    let count = getPostsResult.length;

    await Promise.all(
      getPostsResult.map(async (v) => {
        let { commentCount } = await postDao.getCommentCount(
          connection,
          v.postIdx
        );
        // v.postIdx = count;
        // count--;
        v["commentCount"] = commentCount;
        let { likeCount } = await postDao.getLikeCount(connection, v.postIdx);
        v["likeCount"] = likeCount;
      })
    );

    return getPostsResult;
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};

//단일 게시물 가져오기
exports.getPost = async (postIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const getPostResult = await postDao.getPost(connection, postIdx);
    const userIdx = getPostResult[0].userIdx;
    const thisPostIdx = getPostResult[0].postIdx;
    const title = getPostResult[0].title;
    const content = getPostResult[0].content;
    const updatedAt = getPostResult[0].updatedAt;

    //게시물에 이미지가 존재하는지 파악.
    const checkImageNum = await postDao.checkImageNum(connection, postIdx);

    // 단일 댓글을 가져오기
    const getCommentOfPost = await commentDao.getCommentOfPost(
      connection,
      postIdx
    );
    const getCommentOfComment = await commentDao.getCommentOfcomment(
      connection,
      postIdx
    );

    const { commentCount } = await postDao.getCommentCount(connection, postIdx);
    const { likeCount } = await postDao.getLikeCount(connection, postIdx);

    const commentRefList = getCommentOfComment.map((x) => {
      return x.commentRef;
    });

    // 이 게시물의 댓글 등록 순서.
    const orderResult = await commentDao.getOrderOfComment(connection, postIdx);
    await Promise.all(
      getCommentOfPost.map(async (x) => {
        // let orderOfComment;
        let { order } = orderResult.find((y) => {
          return y.userIdx == x.userIdx;
        });
        //각 댓글이 몇번째 댓글인지 확인하는 것.
        x["orderOfComment"] = order;

        let ccList; // 대댓글들의 리스트
        if (commentRefList.includes(x.commentIdx)) {
          //만약 해당 댓글에 대한 대댓이 있다면 대댓에 대한 데이터들도 전달해주어야만 한다.
          let commentOfComment = await commentDao.getCommentOfCommmentContent(
            connection,
            postIdx,
            x.commentIdx
          );
          await Promise.all(
            commentOfComment.map(async (z) => {
              let orderOfCc = orderResult.find((p) => {
                return p.userIdx == z.userIdx;
              });
              z["orderOfComment"] = orderOfCc.order;
            })
          );
          ccList = commentOfComment;
        }
        x["commentOfComment"] = ccList;
      })
    );

    //만약 이미지가 해당 게시물에 존재한다면.
    const imageArray = [];
    if (checkImageNum) {
      getPostResult.map((x) => imageArray.push(x.url));
    }
    const result = {
      userIdx,
      postIdx: thisPostIdx,
      title,
      content,
      commentCount,
      likeCount,
      imageArray,
      updatedAt,
      CommentOfPost: getCommentOfPost,
    };
    return result;
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};

// 게시물의 작성자 userIdx 가져오기
exports.getPostUserIdx = async (postIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const getPostUserIdxResult = await postDao.getPostUserIdx(
      connection,
      postIdx
    );
    return getPostUserIdxResult.userIdx;
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};

// 게시물의 image 존재여부 판단하고 이미지 인덱스들 가져오기
exports.checkImageExist = async (postIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const imageExist = await postDao.checkImageNum(connection, postIdx);

    if (!imageExist) return 0; // 이미지가 존재하지 않으면 0을 반환.
    else {
      // 이미지가 존재하면 게시물에 해당하는 imageIdx 들의 인덱스들을 배열로서 가져온다.
      let imagesOfPost = await postDao.getImageIdxs(connection, postIdx);
      const imageIdxs = [];
      imagesOfPost.map((x) => imageIdxs.push(x.imageIdx));

      return imageIdxs;
    }
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};
