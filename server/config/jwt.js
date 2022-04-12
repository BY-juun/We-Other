require("dotenv").config();
const jwt = require("jsonwebtoken");
const { basicResponse } = require("../config/response");
const baseResponseStatus = require("../config/baseResponseStatus");
const JWT_SECRET = process.env.JWT_SECRET;

exports.token = () => {
  return {
    access(email) {
      return jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
      });
    },
    refresh(email) {
      return jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "30 days",
      });
    },
  };
};

exports.verifyToken = (req, res, next) => {
  try {
    const clientToken = req.cookies.jwt;
    const decoded = jwt.verify(clientToken, JWT_SECRET);

    if (!decoded) {
      return res.send(basicResponse(baseResponseStatus.TOKEN_EMPTY));
    }
    if (decoded) {
      console.log(decoded);
      next();
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.send(basicResponse(baseResponseStatus.TOKEN_EXPIRED));
    }
    return res.send(basicResponse(baseResponseStatus.TOKEN_NOT_VALID));
  }
};
