const baseResponseStatus = require("../../config/baseResponseStatus");
const { basicResponse, resultResponse } = require("../../config/response");
const userDao = require("./userDao");
const { pool } = require("../../config/database");
const crypto = require("crypto");
const { email, passwd } = require("../../config/regex");
const jwt = require("jsonwebtoken")

require("dotenv").config();
const { PASSWD_TOKEN_SECRET } = process.env;

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
    if (!userId) return basicResponse(baseResponseStatus.USER_NOT_EXIST)
    console.log(userId)
    return resultResponse(baseResponseStatus.SUCCESS, userId);
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};
exports.verifyPasswdToken = async(token) =>{
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const {userIdx}  = await userDao.verifyPasswdToken(connection, token);
    console.log(userIdx);

    //발급된 토큰이 제기능을 한다면 userIdx를 넘겨준다. 
    if(jwt.verify(token,PASSWD_TOKEN_SECRET)) return resultResponse(baseResponseStatus.SUCCESS,{userIdx});

  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.TOKEN_NOT_VERIFIED);
  } finally {
    connection.release();
  }
}
exports.verifyPasswd = async(email,passwd)=>{
  const connection = await pool.getConnection(async (conn) => conn);
  try {

    const hashedPassword = await crypto
    .createHash("sha512")
    .update(passwd)
    .digest("base64");
    
    let exist;
  const signInCheckPasswd = await userDao.signInCheckPasswd(
    connection,
    email
  );
  if (hashedPassword == signInCheckPasswd.passwd){
    exist =1;
    return resultResponse(baseResponseStatus.SUCCESS,{exist})
  }
  else{
    exist = 0;
    return resultResponse(baseResponseStatus.SUCCESS,{exist})
  }


  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }

}
