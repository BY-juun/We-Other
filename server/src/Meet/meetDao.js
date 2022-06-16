// 미팅 룸 게시글 생성하기
exports.createMeetRoom = async(connection,title, sexInfo, roomIntro, capacity)=>{
    const createMeetRoomQuery =`
        insert into meetingroom(title, sexInfo, roomIntro, capacity)
        values (?,?,?,?);
    `
    const [createMeetRoomRow] = await connection.query(createMeetRoomQuery,[title, sexInfo, roomIntro, capacity]);
    return createMeetRoomRow;
}

// 미팅 룸 게시글 생성 시 참여 인원들 방 인덱스와 맵핑하기
exports.matchUserMeet = async(connection, roomIdx,userIdx)=>{
    const matchUserMeetQuery =`
        insert into user_meeting(userIdx,roomIdx,status) values ( ?, ?,"W")
    `
    const [matchUserMeetRow]= await connection.query(matchUserMeetQuery,[userIdx,roomIdx])
    console.log("이거를봐! :", userIdx) 
    return matchUserMeetRow
}

// 미팅 룸 게시글 조회
exports.getMeetRooms = async(connection)=>{
   const getMeetRoomsQuery =`
   select roomIdx, sexInfo,capacity, title, roomIntro from meetingroom;
   ` 
    const [getMeetRoomsRow] = await connection.query(getMeetRoomsQuery);
    return getMeetRoomsRow;
}