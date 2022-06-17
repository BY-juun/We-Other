const { pool } = require("../../config/database");
const { resultResponse, basicResponse } = require("../../config/response");
const baseResponseStatus = require("../../config/baseResponseStatus");
const meetDao = require("./meetDao");
const { debugFn } = require("../../util/console");

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

// meetingRooms에 대한 정보들을 가져오기
exports.getMeetRooms = async () => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const getMeetRoomsResult = await meetDao.getMeetRooms(connection);
    debugFn(getMeetRoomsResult);

    await Promise.all(
      getMeetRoomsResult.map(async (v) => {
        const roomIdx = v.roomIdx;
        let memberInfoList = await meetDao.getMembersOfMeeet(
          connection,
          roomIdx
        );
        v["memberInfoList"] = memberInfoList;
      })
    );
    return basicResponse(baseResponseStatus.SUCCESS);
  } catch (error) {
    console.log(error);
    return basicResponse(baseResponseStatus.DB_ERROR);
  } finally {
    connection.release();
  }
};
