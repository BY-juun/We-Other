const { verifyAccessToken } = require("../../config/jwt")

const meet = require("./meetController");

module.exports = (app)=>{

    // 미팅룸 생성 API
    app.post("/api/room/create", verifyAccessToken,meet.roomCreate)



}