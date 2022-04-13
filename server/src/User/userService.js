const { pool } = require("../../config/database");
const crypto = require("crypto");
// const jwt = require("jsonwebtoken");
const userDao = require("./userDao");
const { resultResponse, basicResponse } = require("../../config/response");
const baseResponseStatus = require("../../config/baseResponseStatus");
const { token } = require("../../config/jwt");
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
//로그인이 잘 되었는지 체크
exports.signInCheck = async (email, passwd) => {
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
    // console.log(signInCheckPasswd);
    // console.log(signInCheckPasswd);
    if (hashedPassword == signInCheckPasswd.passwd) {
      console.log(signInCheckPasswd, "이것이다");
      //로그인에 성공하였을 때 jwt를 발급해주어야 한다.
      const accessToken = token().access(email);
      console.log(accessToken);
      const refreshToken = token().refresh(email);
      const { userIdx, userName } = await userDao.getUserInfo(
        connection,
        email
      );
      await userDao.insertRefreshToken(connection, userIdx, refreshToken);
      await connection.commit();
      return resultResponse(baseResponseStatus.LOGIN_SUCCESS, {
        userName,
        accessToken,
        refreshToken,
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
