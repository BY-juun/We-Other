const baseResponseStatus = require("../../config/baseResponseStatus");
const { basicResponse, resultResponse } = require("../../config/response");
const userProvider = require("../User/userProvider");
const postService = require("./postService");
const postProvider = require("./postProvider");
exports.writePost = async (req, res) => {
  const { title, content } = req.body;
  const userIdx = req.userIdx;
  console.log(userIdx);

  if (!title || !content)
    return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
  //하나라도 존재하지 않으면 오류 반환

  const writePostResult = await postService.writePost(userIdx, title, content);
  return res.send(writePostResult);
};

//모든 게시물 가져오는 역할.
exports.getPosts = async (req, res) => {
  const getPostsResult = await postProvider.getPosts();
  return res.send(resultResponse(baseResponseStatus.SUCCESS, getPostsResult));
};
exports.deletePost = async (req, res) => {
  const { postIdx } = req.query;

  const userIdx = req.userIdx;

  const postUserIdx = await postProvider.getPostUserIdx(postIdx);
  //특정 postIdx의 userIdx와 동일할 때에만 해당 게시물을 삭제할 수 있도록 하여야 한다.
  if (!postIdx)
    return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
  if (userIdx != postUserIdx)
    return res.send(basicResponse(baseResponseStatus.USER_NOT_AUTH));
  const result = await postService.deletePost(postIdx);

  return res.send(result);
};
