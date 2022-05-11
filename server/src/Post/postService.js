const { pool } = require("../../config/database");
const { resultResponse, basicResponse } = require("../../config/response");
const baseResponseStatus = require("../../config/baseResponseStatus");
const postDao = require("./postDao");
const path = require("path/posix");

exports.writePost = async (userIdx, title, content) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const insertParams = [userIdx, title, content];
    const test = await postDao.insertPost(connection, insertParams);
    return basicResponse(baseResponseStatus.SUCCESS);
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};
exports.writePostWithImage = async (userIdx, title, content, imageIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();
    const insertParams = [userIdx, title, content];
    const writePostResult = await postDao.insertPost(connection, insertParams);
    const postIdx = writePostResult["insertId"];

    await Promise.all(
      imageIdx.map(async (x) => {
        await postDao.mappingPostImg(connection, postIdx, x);
      })
    );
    // await Promise.all(imageIdx).then(async (x) => {
    //   //x에는 path하나에 존재하는 것.
    //   await postDao.mappingPostImg(connection, postIdx, x);
    //   // console.log(insertResult["insertId"]);
    // });
    await connection.commit();
    return basicResponse(baseResponseStatus.SUCCESS);

    // const insertImageResult = await postDao.insertPost(connection, path);
  } catch (error) {
    await connection.rollback();
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};
exports.insertImage = async (path) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const imageArray = [];
    await connection.beginTransaction();
    
    await Promise.all(path.map(async(x)=>{
      let insertResult = await postDao.insertImage(connection, x);
      let pushHash = {"insertId" : insertResult["insertId"], "url":x}
      imageArray.push(pushHash);
    }))
    await connection.commit();
    return resultResponse(baseResponseStatus.SUCCESS, imageArray);
    // const insertImageResult = await postDao.insertPost(connection, path);
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
    const deletePostResult = await postDao.deletePost(connection, postIdx);
    return basicResponse(baseResponseStatus.SUCCESS);
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};
