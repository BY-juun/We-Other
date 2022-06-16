const meetService = require("./meetService");
const {debugFn} =require("../../util/console")

exports.roomCreate = async(req,res)=>{
    const userIdx = req.userIdx;
    const {title, sexInfo, roomIntro, capacity,meetMateList} = req.body;
    
    if (!title || !sexInfo || !roomIntro || !capacity || !meetMateList) 
        return res.send(basicResponse(baseResponseStatus.PARAMS_NOT_EXACT));
    
    let memberListIdx = []
    memberListIdx= [userIdx,...meetMateList]

    debugFn(memberListIdx)
    const roomCreateResult = await meetService.roomCreate(title, sexInfo, roomIntro, capacity,memberListIdx);

    return res.send(roomCreateResult);


}