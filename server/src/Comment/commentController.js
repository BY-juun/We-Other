const baseResponseStatus = require("../../config/baseResponseStatus");
const { basicResponse } = require("../../config/response");
const commentProvider = require("../Comment/commentProvider");
const commentService = require("../Comment/commentService");

//특정 게시물의 댓글 조회
exports.getCommentOfPost=async(req,res)=>{
    const {postIdx} = req.params;
    //해당 게시물에 해당하는 인덱스를 통해서 댓글의 내용과 userIdx, 날짜 등을
    // 댓글을 조호히할 땐 해당 댓글들에 대해서 

    if(!postIdx){
      return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
    }
    const getCommentOfPostResult = await commentProvider.getCommentOfPost(postIdx);


}

//특정 게시물에 댓글 작성.
exports.writeCommentOfPost  =async(req,res)=>{
    const {postIdx} = req.query;
    const {content}=req.body;
    const userIdx = req.userIdx;   
    if(!postIdx || !userIdx || !content){
      return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
    }
    const writeCommentOfPostResult = await commentService.insertCommentOfPost(userIdx,postIdx,content);
    console.log(writeCommentOfPostResult)
    return res.send(writeCommentOfPostResult) ;

}
// 특정 댓글에 대한 대댓 작성.
exports.writeCommentOfComment = async (req,res)=>{
  const {commentIdx,postIdx}= req.query;
  const {content} = req.body;
  const userIdx = req.userIdx;  
  
  if(!commentIdx || !userIdx || !content || !postIdx){
    return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
  }

  const writeCommentOfCommentResult = await commentService.insertCommentOfComment(userIdx,postIdx,commentIdx,content);
  return res.send(writeCommentOfCommentResult);
}