const { pool } = require("../../config/database");
const crypto = require("crypto");
// const jwt = require("jsonwebtoken");
const userDao = require("./userDao");
const { resultResponse, basicResponse } = require("../../config/response");
const baseResponseStatus = require("../../config/baseResponseStatus");
const tokenSet = require("../../config/jwt");
const postDao = require('../Post/postDao');
const commentDao = require('../Comment/commentDao');
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

    if (hashedPassword == signInCheckPasswd.passwd) {
      //로그인에 성공하였을 때 jwt를 발급해주어야 한다.
      const accessToken = tokenSet.tokenSet().access(userIdx);
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

// 좋아요 등록 
exports.pushLike = async (userIdx, postIdx, commentIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    let likeResult;
    // 게시물에 대한 것과 댓글에 대한 로직을 분리하여 작성하여야만 한다. 
    if (postIdx) {
      const {exist} =await postDao.checkLikePost(connection,userIdx,postIdx);
      if(!exist){
      // 좋아요를 눌렀던 적이 없을 때는 좋아요를 넣어줘야겠지;
        await userDao.insertLikeToPost(connection, userIdx, postIdx);
        likeResult = 1 ; // 좋아요를 누름
      }else{
        // 좋아요를 눌렀던 적이 있을 때는 없애줘야 한다. 
        await userDao.deleteLikePost(connection,userIdx,postIdx);
        likeResult = 0; // 좋아요를 취소함
      }
  
    }
    else {
      const {exist} =await commentDao.checkLikeComment(connection,userIdx,commentIdx);
      if(!exist){
        await userDao.insertLikeToComment(connection, userIdx, commentIdx)
        likeResult = 1 ; // 좋아요를 누름
      }else{
        await userDao.deleteLikeComment(connection,userIdx,postIdx);
        likeResult = 0; // 좋아요를 취소함
      }
    }
    return resultResponse(baseResponseStatus.SUCCESS,likeResult);
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
}

// 비밀번호 초기화시에 token을 부여하기 하기 위함. 
exports.insertUserPasswdToken = async (email,token)=>{
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    
    const insertUserPasswdTokenResult = await userDao.insertUserPasswdToken(connection,email,token);
    

    return resultResponse(baseResponseStatus.SUCCESS,likeResult);
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }

}