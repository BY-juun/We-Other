const baseResponseStatus = require("../../config/baseResponseStatus");
const { basicResponse, resultResponse } = require("../../config/response");
const userService = require("./userService");
const userProvider = require("./userProvider");
const regex = require("../../config/regex");
const jwt = require("jsonwebtoken");
const { token } = require("../../config/jwt");
//회원가입 과정
exports.signUpUser = async (req, res) => {
  const { email, passwd, userName, department, sex, admission } = req.body;

  // 어느하나라도 제대로 입력되지 않았을 때
  if (!email || !passwd || !userName || !department || !sex || !admission)
    return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));

  const emailCheck = await userProvider.emailCheck(email);
  //   console.log(emailCheck[0].exist);
  if (emailCheck[0].exist)
    return res.send(basicResponse(baseResponseStatus.EMAIL_EXISTS));

  const emailValid = regex.email(email);
  // 이메일의 형식이 틀렸을 경우에
  if (!emailValid)
    return res.send(basicResponse(baseResponseStatus.EMAIL_INVALID));
  //최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자 :
  const passwdCheck = regex.passwd(passwd);
  if (!passwdCheck)
    return res.send(basicResponse(baseResponseStatus.PASSWORD_INVALID));

  //   const userNameCheck = await userProvider.userNameCheck(userName);
  //   if (userNameCheck[0].exist)
  //     return res.send(basicResponse(baseResponseStatus.USERNAME_EXISTS));

  await userService.createUser(
    email,
    passwd,
    userName,
    department,
    sex,
    admission
  );
  //   const accessToken = token().access(email);
  //   const refreshToken = token().refresh(email);

  //   res.cookie("access", accessToken);
  //   res.cookie("refresh", refreshToken);
  return res.send(basicResponse(baseResponseStatus.SIGN_UP_SUCCESS));
};

exports.signIn = async (req, res) => {
  const { email, passwd } = req.body;

  if (!email || !passwd)
    return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));

  const emailValid = regex.email(email);
  // 이메일의 형식이 틀렸을 경우에

  if (!emailValid) {
    // console.log(emailValid);
    return res.send(basicResponse(baseResponseStatus.EMAIL_INVALID));
  }
  const emailCheck = userProvider.emailCheck(email);
  // 해당 이메일이 존재하지 않을 때
  if (!emailCheck)
    return res.send(basicResponse(baseResponseStatus.EMAIL_NOT_EXIST));
  // 패스워드 형식이 틀렸을 경우에
  const passwdCheck = regex.passwd(passwd);
  if (!passwdCheck)
    return res.send(basicResponse(baseResponseStatus.PASSWORD_INVALID));

  //이메일과 패스워드가 제대로 되었다면 이를 제대로 되었는지 비교해 봐야겠지?
  const signInResult = await userService.signIn(email, passwd);
  // console.log(signInResult, ": signInResult");
  return res.send(signInResult);
};

exports.getUserDeepInfo = async (req, res) => {
  const { userIdx } = req.params;
  if (!userIdx)
    return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
  const userIdxCheck = await userProvider.userIdxCheck(userIdx);
  if (!userIdxCheck)
    return res.send(basicResponse(baseResponseStatus.USER_NOT_EXIST));
  const userDeepInfo = await userProvider.getUserDeepInfo(userIdx);
  return res.send(resultResponse(baseResponseStatus.SUCCESS, userDeepInfo));
};

exports.test = async (req, res) => {
  const testResult = await userProvider.test();
  const { accessTokenNew } = req; //새롭게 발급받은 accessToken
  testResult.accessTokenNew = accessTokenNew;
  return res.send(testResult);
};
