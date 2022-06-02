const baseResponseStatus = require("../../config/baseResponseStatus");
const { basicResponse, resultResponse } = require("../../config/response");
const userDao = require("./userDao");
const { pool } = require("../../config/database");
const crypto = require("crypto");
const { email } = require("../../config/regex");

exports.userIdxCheck = async (userIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userIdxCheckResult = await userDao.userIdxCheck(connection, userIdx);
    return userIdxCheckResult;
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};

// user의 email의 존재 여부 체크
exports.emailCheck = async (email) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const emailCheckResult = await userDao.emailCheck(connection, email);
    // console.log(emailCheckResult);
    return emailCheckResult;
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};

// user의 이름 존재 여부 체크
exports.userNameCheck = async (userName) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userNameCheckResult = await userDao.userNameCheck(
      connection,
      userName
    );
    // console.log(emailCheckResult);
    return userNameCheckResult;
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};

// user의 존재 여부 체크 이메일 이름 학번
exports.userCheck = async (userName, email,admission) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userCheckResult = await userDao.userCheck(
      connection,
      userName,email,admission
    );
    return userCheckResult;
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};

exports.getUserDeepInfo = async (userIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const getUserDeepInfoResult = await userDao.getUserDeepInfo(
      connection,
      userIdx
    );
    // console.log(emailCheckResult);
    return getUserDeepInfoResult;
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};
exports.getRefreshToken = async (accessToken) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const refreshToken = await userDao.getRefreshToken(connection, accessToken);
    return refreshToken;
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};

// 유저의 아이디 찾기
exports.findUserId = async (userName, admission ) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userId = await userDao.getUserId(connection, userName, admission);
    console.log(userId)
    return resultResponse(baseResponseStatus.SUCCESS, userId);
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};


