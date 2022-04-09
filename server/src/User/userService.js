const { pool } = require('../../config/database')
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const userDao = require("./userDao");
const { resultResponse, basicResponse } = require('../../config/response');
const baseResponseStatus = require('../../config/baseResponseStatus');


//로그인 생성.
exports.createUser = async (email, passwd, userName, department, sex, admission) => {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
        await connection.beginTransaction();
        let insertUserParams;
        // Password Hash
        if (passwd) {
            const hashedPassword = await crypto.createHash("sha512").update(passwd).digest("base64");
            insertUserParams = [email, hashedPassword, userName, department, sex, admission];
        } else {
            insertUserParams = [email, null, userName, department, sex, admission];
        }

        const signUpResult = await userDao.insertUser(connection, insertUserParams);
        console.log(signUpResult);
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
            // jwt: token,
        });
    } catch (err) {
        await connection.rollback();
        console.log(err);
        return basicResponse(baseResponseStatus.DB_ERROR)
    } finally {
        connection.release();
    }

}
