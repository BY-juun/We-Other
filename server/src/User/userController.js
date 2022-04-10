const baseResponseStatus = require("../../config/baseResponseStatus");
const { basicResponse } = require("../../config/response");
const userService = require("./userService");
const userProvider = require("./userProvider");
const regex = require("../../config/regex");
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

  //최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자 :
  const passwdCheck = regex.email(passwd);
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

  return res.send(basicResponse(baseResponseStatus.SIGN_UP_SUCCESS));
};
