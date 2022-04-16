const post = require("./postController");
const { verifyAccessToken } = require("../../config/jwt");

module.exports = (app) => {
  //로그인된 회원만 글을 쓸 수 있기때문이다.
  app.post("/api/post", verifyAccessToken, post.writePost);
};
