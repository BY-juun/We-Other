
/**
 * 기본 구조. 
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    return basicResponse(baseResponseStatus.SUCCESS);
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
*/

const { pool } = require("../../config/database");
const { resultResponse, basicResponse } = require("../../config/response");
const baseResponseStatus = require("../../config/baseResponseStatus");
const meetDao = require("./meetDao");
const {debugFn} = require("../../util/console");

exports.roomCreate = async(title, sexInfo, roomIntro, capacity,memberListIdx)=>{
    const connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();

    const roomCreateResult = await meetDao.createMeetRoom(connection,title, sexInfo, roomIntro, capacity);
    const roomIdx = roomCreateResult.insertId
    await Promise.all(memberListIdx.map(async (v) =>{
        debugFn(v)
        // v는 현재  memberListIdx의 인덱스를 말한다. 
        await meetDao.matchUserMeet(connection,roomIdx,v);

    }))
    await connection.commit();
    return basicResponse(baseResponseStatus.SUCCESS);
  } catch (error) {
    console.log(error);
    await connection.rollback();

    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
}


