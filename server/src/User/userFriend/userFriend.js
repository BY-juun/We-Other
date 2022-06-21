const express = require("express");
const router = express.Router();
const { verifyAccessToken } = require("../../../config/jwt")
const user = require("../userController");

  // 친구 신청
  router.post("/", verifyAccessToken, user.sendFriendRequest);

  // 친구 신청 내역 가져오기
  router.get("/request/list", verifyAccessToken, user.getFriendRequest);

  // 받은 친구 요청 갯수 가져오기
  router.get("/receive",verifyAccessToken,user.requestedFriendList)

  // 친구 신청 응답하기 
  router.patch("/answer", verifyAccessToken, user.answerFriendRequest)

  // 친구 신청 요청 삭제하기
  router.delete("/delete",verifyAccessToken,user.deleteFriendRequest)

  // 친구 목록 가져오기
  router.get("/list", verifyAccessToken, user.getFriendList)


module.exports = router;