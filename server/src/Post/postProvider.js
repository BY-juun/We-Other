const baseResponseStatus = require("../../config/baseResponseStatus");
const { basicResponse, resultResponse } = require("../../config/response");
const { pool } = require("../../config/database");
const postDao = require("./postDao");

//전체 게시물 가져오기
exports.getPosts = async () => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const getPostsResult = await postDao.getPosts(connection);
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
    const checkImageNum = await postDao.checkImageNum(connection,postIdx);

    //만약 이미지가 해당 게시물에 존재한다면. 
    const imageArray = [];
    if(checkImageNum) {
       getPostResult.map( x => imageArray.push(x.url));
      }
      const result = {
        userIdx,
        postIdx : thisPostIdx,
        title,
        content,
        updatedAt,
        imageArray 
      }
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
exports.checkImageExist = async (postIdx)=>{
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const imageExist = await postDao.checkImageNum(connection,postIdx);

    if(!imageExist) return 0; // 이미지가 존재하지 않으면 0을 반환.
    else{ // 이미지가 존재하면 게시물에 해당하는 imageIdx 들의 인덱스들을 배열로서 가져온다. 
      let imagesOfPost = await postDao.getImageIdxs(connection,postIdx);
      const imageIdxs = [];
      imagesOfPost.map((x) => imageIdxs.push(x.imageIdx));
      console.log("imagesOfPost : " , imagesOfPost)
      console.log("imageIdxs : ",imageIdxs)
      return imageIdxs;
    }
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
}
