const express = require("express");
const router = express.Router();

const user = require("../userController");

router.get("/", (req, res) => {
  res.send("이것을 확인해보자");
});
// 마이페이지에서 유저의 상세 정보 보여주기
router.get("/:userIdx", user.getUserIntro);

// 미팅 등록시 유저 검색하는 것 찾아오기
router.get("/search", user.seachUser);

module.exports = router;
