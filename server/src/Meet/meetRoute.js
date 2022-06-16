const { verifyAccessToken } = require("../../config/jwt")

const meet = require("./meetController");

module.exports = (app)=>{

    // 미팅룸 전체 조회 API
    app.get("/api/meet/room/",verifyAccessToken,meet.getMeetRooms)

    // 미팅룸 생성 API
    app.post("/api/meet/room/create", verifyAccessToken,meet.roomCreate)



}