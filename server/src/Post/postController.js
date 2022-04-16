const baseResponseStatus = require("../../config/baseResponseStatus");
const { basicResponse, resultResponse } = require("../../config/response");
const userProvider = require("../User/userProvider");
const postProvider = require("./postService");

exports.writePost = async (req, res) => {
  const { title, content } = req.body;
  const userIdx = req.userIdx;
  console.log(userIdx);

  if (!title || !content)
    return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
  //하나라도 존재하지 않으면 오류 반환

  const writePostResult = await postProvider.writePost(userIdx, title, content);
  return res.send(writePostResult);
};
