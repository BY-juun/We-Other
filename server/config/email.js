const userProvider = require("../src/User/userProvider");
const userService = require("../src/User/userService");
const { tokenSet } = require("./jwt");
const nodemailer = require("nodemailer");
const { basicResponse } = require("./response");
const baseResponseStatus = require("./baseResponseStatus");

// 최상단 폴더에서 path를 설정해주었다면 그 하위 폴더에서는 config() 만해주면 된.
require("dotenv").config();

const { ADMIN_EMAIL, ADMIN_PASSWD } = process.env;

const transporter = nodemailer.createTransport({
  service: "Naver",
  host: "smtp.naver.com",
  port: 587,
  auth: {
    // 이메일을 보낼 계정 데이터 입력
    user: ADMIN_EMAIL,
    pass: ADMIN_PASSWD,
  },
});

exports.findUserPassWd = async (req, res) => {
  //3개에 대해서 body로 그 값을 받아와준다.
  const { email, userName, admission } = req.query;
  if (!email || !userName || !admission) {
    return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
  }

  const { exist } = await userProvider.userCheck(email, userName, admission);
  if (exist == 0)
    return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
  if (exist) {
    //만약 해당 사용자가 존재한다면 메일을 보내기 위한 처리를 해줄 수 있다.
    // 토큰 발급은 Jwt를 이용해서 진행하도록 한.
    const token = tokenSet().passwd(email);
    await userService.insertUserPasswdToken(email, token);

    const emailOptions = {
      // 옵션값 설정
      from: ADMIN_EMAIL,
      to: email,
      subject: "비밀번호 초기화 이메일입니다.",
      html:
        "비밀번호 초기화를 위해서는 아래의 URL을 클릭하여 주세요." +
        `http://localhost:3003/passwd/reset/${token}`,
    };
    transporter.sendMail(emailOptions, res); //전송
  }

  return res.send(basicResponse(baseResponseStatus.SUCCESS));
};
