const express = require("express");
const router = express.Router();

const user = require("../userController");

module.exports = ()=>{
    //유저의 소개 정보 가져오기
    
    router.get('/userIntro/:userIdx', user.getUserIntro);


}