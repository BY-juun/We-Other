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
