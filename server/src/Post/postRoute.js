const post = require("./postController");
const { verifyAccessToken } = require("../../config/jwt");
const { upload } = require("../../config/multer");

module.exports = (app) => {
  //로그인된 회원만 글을 쓸 수 있기때문이다.

  //게시물 작성
  app.post(
    "/api/post",
    verifyAccessToken,
    upload.array("image", 6),
    post.writePost
  );
  //게시물에 이미지 등록
  app.post(
    "/api/post/image",
    verifyAccessToken,
    upload.array("image", 6), //6개까지의 게시물을 등록한다.
    post.uploadImage
  );

  //모든 게시물 가져오기
  app.get("/api/post", post.getPosts);

  // 단일 게시물 가져오기
  app.get("/api/post/:postIdx", post.getPost);

  //게시물 삭제
  app.delete("/api/post/delete", verifyAccessToken, post.deletePost);

};
