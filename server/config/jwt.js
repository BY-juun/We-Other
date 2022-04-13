const jwt = require("jsonwebtoken");
const { basicResponse } = require("../config/response");
const baseResponseStatus = require("../config/baseResponseStatus");
// const JWT_SECRET = process.env.JWT_SECRET;
// require("dotenv").config();
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

exports.token = () => {
  return {
    access(email) {
      return jwt.sign({ email }, ACCESS_TOKEN_SECRET, {
        expiresIn: "30s",
      });
    },
    refresh(email) {
      return jwt.sign({ email }, REFRESH_TOKEN_SECRET, {
        expiresIn: "30 days",
      });
    },
  };
};

// 토큰을 인증하는 것은
exports.verifyAccessToken = (req, res, next) => {
  try {
    const accessToken = req.headers["accesstoken"];
    console.log(accessToken);
    // 클라이언트에서 토큰을 받아온다.
    if (!accessToken)
      return res.send(basicResponse(baseResponseStatus.TOKEN_NOT_EXIST));
    const { email } = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
    console.log(email);
    if (!email) {
      return res.send(basicResponse(baseResponseStatus.TOKEN_EMPTY));
    }
    if (email) {
      req.email = email;
      next();
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.send(basicResponse(baseResponseStatus.TOKEN_EXPIRED));
    }
    return res.send(basicResponse(baseResponseStatus.TOKEN_NOT_VALID));
  }
};
exports.verifyRefreshToken = (req, res, next) => {
  try {
    const refreshToken = req.header["refreshtoken"];
    if (!refreshToken)
      return res.send(basicResponse(baseResponseStatus.TOKEN_NOT_EXIST));
    const { email } = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
  } catch (error) {}
};
exports.jwtMiddleWare = (req, res, next) => {};
