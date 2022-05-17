const { verifyAccessToken } = require("../../config/jwt");
const user = require("./userController");

module.exports = (app) => {

  //회원가입
  app.post("/api/user/sign-up", user.signUpUser);

  //로그인
  app.post("/api/user/sign-in", user.signIn);

  //사용자 정보 가져오기
  app.get("/api/user/:userIdx", user.getUserDeepInfo);

  // 게시물 좋아요 누르기
  app.patch("/api/user/like/:postIdx", verifyAccessToken, user.pushLikeToPost);


};
