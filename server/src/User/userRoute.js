const { verifyAccessToken } = require("../../config/jwt");
const user = require("./userController");
const { findUserPassWd } = require("../../config/email");

const userIntro = require("./userIntro/userIntro");
const userFriend = require("./userFriend/userFriend");

module.exports = (app) => {
  // userIntro에 대한 라우터
  app.use("/api/user/intro", userIntro);

  //회원가입
  app.post("/api/user/sign-up", user.signUpUser);

  // 이메일 중복체크
  app.get("/api/user/email/duplicate", user.emailDublicate)

  //로그인
  app.post("/api/user/sign-in", user.signIn);

  // 아이디 찾기
  app.get("/api/user/find/id", user.findUserId);

  // 비밀번호 찾기 - 및 재설정.
  app.get("/api/user/find/passwd", findUserPassWd);

  // 비밀번호 재설정을 위한 토큰 검증 API
  app.get("/api/user/verify/passwd/token", user.verifyPasswdToken);

  // 비밀전호 재설정
  app.put("/api/user/reset/passwd", user.resetUserPasswd);

  // 비밀번호 확인
  app.get("/api/user/passwd/verify", user.verifyPasswd);

  //사용자 정보 가져오기
  app.get("/api/user/:userIdx", user.getUserDeepInfo);

  // 좋아요 누르기
  app.patch("/api/user/like", verifyAccessToken, user.pushLike);

  // user의 Friend에 대한 api들 정리 
  app.use("/api/user/friend",userFriend);
};
