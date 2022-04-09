const baseResponseStatus = require('../../config/baseResponseStatus')
const { basicResponse } = require('../../config/response')
const userService = require("./userService")

//회원가입 과정
exports.signUpUser = async (req, res) => {
    const { email, passwd, userName, department, sex, admission } = req.body

    // 어느하나라도 제대로 입력되지 않았을 때
    if (!email || !passwd || !userName || !department || !sex || !admission) return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT))

    await userService.createUser(email, passwd, userName, department, sex, admission)

    return res.send(basicResponse(baseResponseStatus.SIGN_UP_SUCCESS))
}