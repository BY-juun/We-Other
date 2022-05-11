const baseResponseStatus = require("../../config/baseResponseStatus");
const { basicResponse } = require("../../config/response");
const commentProvider = require("../Comment/commentProvider");
const commentService = require("../Comment/commentService");

//특정 게시물의 댓글 조회
exports.getCommentOfPost=async(req,res)=>{
    const {postIdx} = req.params;
    //해당 게시물에 해당하는 인덱스를 통해서 댓글의 내용과 userIdx, 날짜 등을
    



}

//특정 게시물에 댓글 작성.
exports.writeCommentOfPost  =async(req,res)=>{
    const {postIdx} = req.params;
    const {content}=req.body;
    const userIdx = req.userIdx;   
    console.log(userIdx); 
    if(!postIdx || !userIdx || !content){
      return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
    }

    const writeCommentOfPostResult = await commentService.insertCommentOfPost(userIdx,postIdx,content);
    return res.send(writeCommentOfPostResult) ;

}