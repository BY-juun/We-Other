const { verifyAccessToken } = require("../../config/jwt");

module.exports = (app) => {
  const user = require("./userController");

  //회원가입
  app.post("/api/user/sign-up", user.signUpUser);

  //로그인
  app.post("/api/user/sign-in", user.signIn);

  //사용자 정보 가져오기
  app.get("/api/user/:userIdx", user.getUserDeepInfo);

  //

  app.get("/api/user/test", verifyAccessToken, user.test);
};
