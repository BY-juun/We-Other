const { pool } = require("../../config/database");
const { resultResponse, basicResponse } = require("../../config/response");
const baseResponseStatus = require("../../config/baseResponseStatus");
const postDao = require("./postDao");

exports.writePost = async (userIdx, title, content) => {
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    const insertParams = [userIdx, title, content];
    connection.beginTransaction();
    await postDao.insertPost(connection, insertParams);
    await connection.commit();
    return basicResponse(baseResponseStatus.SUCCESS);
  } catch (error) {
    await connection.rollback();
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};

exports.deletePost = async (postIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    connection.beginTransaction();
    const deletePostResult = await postDao.deletePost(connection, postIdx);
    await connection.commit();
    return basicResponse(baseResponseStatus.SUCCESS);
  } catch (error) {
    await connection.rollback();
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};
