require("dotenv").config()
const jwt = require("jsonwebtoken");
const response = require("../config/response")
const responseStatus = require("../config/baseResponseStatus")

const token = () => {
    return {
        access(id) {
            return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "15m",
            })
        },
        refresh(id) {
            return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: "180 days",
            })
        },
    }
}



exports.verifyToken = (req, res, next) => {

    try {
        req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        return next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.send(response.basicResponse(responseStatus.TOKEN_EXPIRED));
        }
        return res.send(response.basicResponse(responseStatus.TOKEN_NOT_VALID));


    }


}