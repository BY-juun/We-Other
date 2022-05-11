const { pool } = require("../../config/database");
const { resultResponse, basicResponse } = require("../../config/response");
const baseResponseStatus = require("../../config/baseResponseStatus");
const commentDao = require("./commentDao");

// 특정 게시물에 댓글 달기 
exports.insertCommentOfPost = async (userIdx,postIdx,content)=>{
    const connection = await pool.getConnection(async (conn) => conn);
    try {
    //   const insertParams = [userIdx, postIdx, content];
      const insertCommentOfPostResult= await commentDao.insertCommentOfPost(connection, userIdx, postIdx, content);
      console.log(insertCommentOfPostResult);
      return basicResponse(baseResponseStatus.SUCCESS);
    } catch (error) {
      console.log(error);
      return basicResponse(baseResponseStatus.DB_ERROR);
    } finally {
      connection.release();
    }
}