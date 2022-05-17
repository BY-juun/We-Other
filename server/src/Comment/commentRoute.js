const comment = require("../Comment/commentController");
const { verifyAccessToken } = require("../../config/jwt");

module.exports = (app) => {

    //게시물의 코멘트 조회
    app.get("/api/comment/:postIdx", comment.getCommentOfPost);

    //게시물에 댓글 등록
    app.post("/api/comment/post",verifyAccessToken,comment.writeCommentOfPost);

    // 댓글에 댓글 등록
    app.post("/api/comment/test",verifyAccessToken,comment.writeCommentOfComment);
    
};
