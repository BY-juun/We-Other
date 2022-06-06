const { verifyAccessToken } = require("../../config/jwt");
const user = require("./userController");
const { findUserPassWd } = require("../../config/email");

module.exports = (app) => {
  //회원가입
  app.post("/api/user/sign-up", user.signUpUser);

  //로그인
  app.post("/api/user/sign-in", user.signIn);

  // 아이디 찾기
  app.get("/api/user/find/id", user.findUserId);

  // 비밀번호 찾기 - 및 재설정.
  app.get("/api/user/find/passwd", findUserPassWd, user.findUserPasswd);

  // 비밀전호 재설정
  app.get("/api/user/reset/passwd", findUserPassWd, user.findUserPasswd);

  //사용자 정보 가져오기
  app.get("/api/user/:userIdx", user.getUserDeepInfo);

  // 좋아요 누르기
  app.patch("/api/user/like", verifyAccessToken, user.pushLike);
};
