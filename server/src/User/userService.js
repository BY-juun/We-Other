const { pool } = require("../../config/database");
const crypto = require("crypto");
// const jwt = require("jsonwebtoken");
const userDao = require("./userDao");
const { resultResponse, basicResponse } = require("../../config/response");
const baseResponseStatus = require("../../config/baseResponseStatus");
const tokenSet = require("../../config/jwt");
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

const jwt = require("jsonwebtoken");

// require("dotenv").config();
// const JWT_SECRET = process.env.JWT_SECRET;

//로그인 생성.
exports.createUser = async (
  email,
  passwd,
  userName,
  department,
  sex,
  admission
) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();
    let insertUserParams;
    // Password Hash
    if (passwd) {
      const hashedPassword = await crypto
        .createHash("sha512")
        .update(passwd)
        .digest("base64");
      insertUserParams = [
        email,
        hashedPassword,
        userName,
        department,
        sex,
        admission,
      ];
    } else {
      insertUserParams = [email, null, userName, department, sex, admission];
    }

    const signUpResult = await userDao.insertUser(connection, insertUserParams);

    // const newUserToken = jwt.sign(
    //   { userId: signUpResult.insertId },
    //   JWT_SECRET,
    //   {
    //     expiresIn: "1h",
    //   }
    // );
    // const userId = signUpResult.insertId;
    // const userAccessToken = token().access(userId);
    // const userRefreshToken = token().refresh(userId);

    // let token = jwt.sign(
    //     {
    //         userIdx: signUpResult[0].insertId,
    //         isKeep: 0,
    //     }, // 토큰의 내용(payload)
    //     secret_config.jwtsecret, // 비밀키
    //     {
    //         expiresIn: "6h",
    //         subject: "userInfo",
    //     }, // 유효 기간 365일
    // );

    // await userDao.insertUserLog(connection, signUpResult[0].insertId, "login");
    await connection.commit();
    return resultResponse(baseResponseStatus.SIGN_UP_SUCCESS, {
      userIdx: signUpResult.insertId,
    });
  } catch (err) {
    await connection.rollback();
    console.log(err);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};
//로그인
exports.signIn = async (email, passwd) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();

    const hashedPassword = await crypto
      .createHash("sha512")
      .update(passwd)
      .digest("base64");

    const signInCheckPasswd = await userDao.signInCheckPasswd(
      connection,
      email
    );
    const { userIdx, userName } = await userDao.getUserShortInfo(
      connection,
      email
    );

    // console.log(signInCheckPasswd);
    // console.log(signInCheckPasswd);
    if (hashedPassword == signInCheckPasswd.passwd) {
      //로그인에 성공하였을 때 jwt를 발급해주어야 한다.
      const accessToken = tokenSet.tokenSet().access(userIdx);
      // console.log(accessToken);
      const refreshToken = tokenSet.tokenSet().refresh(userIdx);

      const refreshTokenExist = await userDao.refreshTokenExist(
        connection,
        userIdx
      );

      if (refreshTokenExist.exist) {
        //refreshtoken이 존재한다면 이미 로그인한 전적이 있다는 것
        await userDao.updateToken(
          connection,
          userIdx,
          refreshToken,
          accessToken
        );
      } else {
        //refreshToken이 없다는 것은 로그인 내역이 없다는 것.
        await userDao.insertRefreshToken(
          connection,
          userIdx,
          refreshToken,
          accessToken
        );
      }

      // const refresh = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
      // console.log(refresh.exp);

      await connection.commit();
      return resultResponse(baseResponseStatus.LOGIN_SUCCESS, {
        userIdx,
        userName,
        accessToken,
      });
    } else return basicResponse(baseResponseStatus.PASSWD_NOT_EXACT);
  } catch (error) {
    await connection.rollback();
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};

exports.updateAccessToken = async (id, accessToken) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();
    await userDao.updateAccessToken(connection, id, accessToken);
    await connection.commit();
  } catch (error) {
    await connection.rollback();

    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};

// 게시물에 좋아요 등록하기 
exports.pushLikeToPost = async (userIdx, postIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const pushLikeResult = await userDao.insertLikeToPost(connection, userIdx, postIdx);
    return basicResponse(baseResponseStatus.SUCCESS);
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
}
