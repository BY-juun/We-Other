const baseResponseStatus = require("../../config/baseResponseStatus");
const { basicResponse, resultResponse } = require("../../config/response");
const userProvider = require("../User/userProvider");
const postService = require("./postService");
const postProvider = require("./postProvider");

//게시물 등록
exports.writePost = async (req, res) => {
  const { title, content, imageIdx } = req.body;
  //imageIdx를 배열 형태로 전달한다.

  const userIdx = req.userIdx;
  if (!title || !content) return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
  //하나라도 존재하지 않으면 오류 반환

  const writePostResult =
    imageIdx ? await postService.writePostWithImage(userIdx, title, content, imageIdx) : await postService.writePost(userIdx, title, content);
  return res.send(writePostResult);
};

//게시물에 이미지 등록 하기
exports.uploadImage = async (req, res) => {
  const image = req.files;
  let path;
  if (image) path = image.map((x) => x.path);
  else {
    return res.send(resultResponse(baseResponseStatus.IMAGE_NOT_EXIST));
  }
  const uploadImage = await postService.insertImage(path);
  return res.send(uploadImage);
};

//모든 게시물 가져오는 api
exports.getPosts = async (req, res) => {
  const getPostsResult = await postProvider.getPosts();
  return res.send(resultResponse(baseResponseStatus.SUCCESS, getPostsResult));
};

//단일 게시물 가져오는 api
exports.getPost = async (req, res) => {
  const { postIdx } = req.params;
  const getPostResult = await postProvider.getPost(postIdx);

  return res.send(resultResponse(baseResponseStatus.SUCCESS, getPostResult));
};

exports.deletePost = async (req, res) => {
  const { postIdx } = req.query;

  const userIdx = req.userIdx;

  const postUserIdx = await postProvider.getPostUserIdx(postIdx);
  //특정 postIdx의 userIdx와 동일할 때에만 해당 게시물을 삭제할 수 있도록 하여야 한다.
  if (!postIdx) return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
  if (userIdx != postUserIdx) return res.send(basicResponse(baseResponseStatus.USER_NOT_AUTH));
  const result = await postService.deletePost(postIdx);

  return res.send(result);
};
