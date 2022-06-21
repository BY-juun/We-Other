// 미팅 룸 게시글 생성하기
exports.createMeetRoom = async (
  connection,
  title,
  sexInfo,
  roomIntro,
  capacity
) => {
  const createMeetRoomQuery = `
        insert into meetingroom(title, sexInfo, roomIntro, capacity)
        values (?,?,?,?);
    `;
  const [createMeetRoomRow] = await connection.query(createMeetRoomQuery, [
    title,
    sexInfo,
    roomIntro,
    capacity,
  ]);
  return createMeetRoomRow;
};

// 미팅 룸 게시글 생성 시 참여 인원들 방 인덱스와 맵핑하기
exports.matchUserMeet = async (connection, roomIdx, userIdx) => {
  const matchUserMeetQuery = `
        insert into user_meeting(userIdx,roomIdx,status) values ( ?, ?,"W")
    `;
  const [matchUserMeetRow] = await connection.query(matchUserMeetQuery, [
    userIdx,
    roomIdx,
  ]);
  return matchUserMeetRow;
};

// 미팅 룸 게시글 조회
exports.getMeetRooms = async (connection) => {
  const getMeetRoomsQuery = `
   select roomIdx, sexInfo,capacity, title, roomIntro from meetingroom;
   `;
  const [getMeetRoomsRow] = await connection.query(getMeetRoomsQuery);
  return getMeetRoomsRow;
};

// 미팅 룸에 속한 멤버들에 대한 정보를 가져오는 DAO
exports.getMembersOfMeeet = async (connection, roomIdx) => {
  const getMembersOfMeeetQuery = `
    select u.userIdx,u.userName,u.admission,u.department from meetingroom m 
    left join user_meeting um on m.roomIdx = um.roomIdx
    left join user u on u.userIdx = um.userIdx 
    where m.roomIdx = ? 
    `;
  const [getMembersOfMeeetRow] = await connection.query(
    getMembersOfMeeetQuery,
    roomIdx
  );
  return getMembersOfMeeetRow;
};
