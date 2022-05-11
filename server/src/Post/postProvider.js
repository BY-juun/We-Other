const baseResponseStatus = require("../../config/baseResponseStatus");
const { basicResponse, resultResponse } = require("../../config/response");
const { pool } = require("../../config/database");
const postDao = require("./postDao");
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
    console.log(getPostResult);
    const userIdx = getPostResult[0].userIdx;
    const thisPostIdx = getPostResult[0].postIdx;
    const title = getPostResult[0].title;
    const content = getPostResult[0].content;
    const updatedAt = getPostResult[0].updatedAt;

    //게시물에 이미지가 존재하는지 파악. 
    const checkImageNum = await postDao.checkImageNum(connection,postIdx);
    console.log(checkImageNum);

    

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

exports.getPostUserIdx = async (postIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const getPostUserIdxResult = await postDao.getPostUserIdx(
      connection,
      postIdx
    );
    return getPostUserIdxResult;
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};
