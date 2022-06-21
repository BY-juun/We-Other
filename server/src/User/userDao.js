const { passwd, email } = require("../../config/regex");

exports.insertUser = async (connection, insertUserParams) => {
  const insertUserQuery = `
     INSERT INTO user (email, passwd, userName, department, sex, admission)
        VALUES (?,?,?,?,?,?);    
    `;
  const [insertUserRow] = await connection.query(
    insertUserQuery,
    insertUserParams
  );
  return insertUserRow;
};
exports.userIdxCheck = async (connection, userIdx) => {
  const userIdxCheckQuery = `
    select exists (
    select * from user where userIdx = ?
    ) as exist
`;
  const [[userIdxCheckRow]] = await connection.query(
    userIdxCheckQuery,
    userIdx
  );
  return userIdxCheckRow;
};

// 친구 신청 보낸 적이 있는 지에 대한 검사
exports.friendIdxCheck = async (connection,userIdx,friendIdx)=>{
  const friendIdxCheckQuery =`
    select exists (
      select * from friend Where userIdx = ? and friendIdx = ? and status != "R"
    ) as exist
  `
  const [[friendIdxCheckRow]] = await connection.query(
    friendIdxCheckQuery,[userIdx,
    friendIdx]
  );
  return friendIdxCheckRow.exist;

}


//email로 userIdx 가져오기
exports.getUserIdx = async (connection, email) => {
  const getUserIdxQuery = `
    select userIdx from user where email = ?;
  `;
  const [[getUserIdxRow]] = await connection.query(getUserIdxQuery, email);
  return getUserIdxRow;
};

exports.emailCheck = async (connection, email) => {
  const emailCheckQuery = `
    select exists (
    select * from user where email = ?
    ) as exist
`;
  const [[emailCheckRow]] = await connection.query(emailCheckQuery, email);
  return emailCheckRow.exist;
};

exports.userNameCheck = async (connection, userName) => {
  const userNameCheckQuery = `
    select exists (
        select * from user where userName = ?
        ) as exist
    `;
  const [userNameCheckRow] = await connection.query(
    userNameCheckQuery,
    userName
  );
  return userNameCheckRow;
};
exports.userCheck = async (connection, userName, email, admission) => {
  const userCheckQuery = `
  select exists (
    select * from user where email = ? and userName = ? and admission = ?
    ) as exist
  `;
  const [[userCheckRow]] = await connection.query(userCheckQuery, [
    userName,
    email,
    admission,
  ]);
  return userCheckRow;
};

exports.signInCheckPasswd = async (connection, email) => {
  const signInCheckPasswdQuery = `
        select passwd from user 
        where email = ?;
    `;
  const [[signInCheckPasswdRow]] = await connection.query(
    signInCheckPasswdQuery,
    email
  );
  return signInCheckPasswdRow;
};
exports.getUserShortInfo = async (connection, email) => {
  const getUserShortInfoQuery = `
    select userIdx, userName from user 
    where email = ?;
  `;
  const [[getUserShortInfoRow]] = await connection.query(
    getUserShortInfoQuery,
    email
  );
  return getUserShortInfoRow;
};
exports.getUserDeepInfo = async (connection, userIdx) => {
  const getUserDeepInfoQuery = `
    select email, userName,department,sex,admission from user 
    where userIdx = ?;
  `;
  const [[getUserDeepInfoRow]] = await connection.query(
    getUserDeepInfoQuery,
    userIdx
  );
  return getUserDeepInfoRow;
};

exports.insertRefreshToken = async (
  connection,
  userIdx,
  refreshToken,
  accessToken
) => {
  const insertRefreshTokenQuery = `
    insert into token(userIdx,refreshToken,accessToken) value(?,?,?);
  `;
  const [insertRefreshTokenRow] = await connection.query(
    insertRefreshTokenQuery,
    [userIdx, refreshToken, accessToken]
  );

  return insertRefreshTokenRow;
};
exports.updateToken = async (
  connection,
  userIdx,
  refreshToken,
  accessToken
) => {
  const updateTokenQuery = `
  update token set refreshToken= ?, accessToken = ? 
  where userIdx = ?
`;
  const updateTokenRow = connection.query(updateTokenQuery, [
    refreshToken,
    accessToken,
    userIdx,
  ]);
  return updateTokenRow;
};

exports.refreshTokenExist = async (connection, userIdx) => {
  const refreshTokenExistQuery = `
  select exists (
    select * from token where userIdx = ?
    ) as exist
`;
  const [[refreshTokenExistRow]] = await connection.query(
    refreshTokenExistQuery,
    userIdx
  );
  return refreshTokenExistRow;
};
exports.getRefreshToken = async (connection, accessToken) => {
  const getRefreshTokenQuery = `
    select refreshToken from token 
    where accessToken = ?
  `;
  const [[getRefreshTokenRow]] = await connection.query(
    getRefreshTokenQuery,
    accessToken
  );
  return getRefreshTokenRow;
};

exports.updateAccessToken = async (connection, id, accessToken) => {
  const updateAccessTokenQuery = `
  update token set accessToken = ? 
  where userIdx = ?
`;
  const updateAccessTokenRow = await connection.query(updateAccessTokenQuery, [
    accessToken,
    id,
  ]);
  return updateAccessTokenRow;
};

//게시물에 좋아요 누르기
exports.insertLikeToPost = async (connection, userIdx, postIdx) => {
  const insertLikeToPostQuery = `
  INSERT INTO recommend (userIdx, postIdx)
  VALUES (?,?)
  `;
  const [insertLikeToPostRow] = await connection.query(insertLikeToPostQuery, [
    userIdx,
    postIdx,
  ]);
  return insertLikeToPostRow;
};

// 게시물에 좋아요 취소하기
exports.deleteLikePost = async (connection, userIdx, postIdx) => {
  const deleteLikePostQuery = `
    DELETE FROM recommend WHERE userIdx = ? and postIdx =?;
  `;
  const [deleteLikePostRow] = await connection.query(deleteLikePostQuery, [
    userIdx,
    postIdx,
  ]);
  return deleteLikePostRow;
};

// 댓글에 좋아요 누르기
exports.insertLikeToComment = async (connection, userIdx, commentIdx) => {
  const insertLikeToCommentQuery = `
  INSERT INTO recommend (userIdx, commentIdx)
  VALUES (?,?)
  `;
  const [insertLikeToCommentRow] = await connection.query(
    insertLikeToCommentQuery,
    [userIdx, commentIdx]
  );
  return insertLikeToCommentRow;
};

// 좋아요를 취소함
exports.deleteLikeComment = async (connection, userIdx, commentIdx) => {
  const deleteLikeCommentQuery = `
  DELETE FROM recommend WHERE userIdx = ? and commentIdx =?;
  `;
  const [deleteLikeCommentRow] = await connection.query(
    deleteLikeCommentQuery,
    [userIdx, commentIdx]
  );
  return deleteLikeCommentRow;
};

// user의 id 찾기 (이메일)
exports.getUserId = async (connection, userName, admission) => {
  const getUserIdQuery = `
 select email from user 
 where userName = ? and admission= ?
 `;
  const [[getUserId]] = await connection.query(getUserIdQuery, [
    userName,
    admission,
  ]);
  return getUserId;
};
exports.insertUserPasswdToken = async (connection, email, token) => {
  const insertUserPasswdTokenQuery = `
  UPDATE user SET token = ? WHERE email = ?;
  `;
  const [insertUserPasswdTokenRow] = await connection.query(
    insertUserPasswdTokenQuery,
    [token, email]
  );
  return insertUserPasswdTokenRow;
};

// 패스워드 재설정 시 필요한 토큰 검증
exports.verifyPasswdToken = async (connection, token) => {
  const verifyPasswdTokenQuery = `
      select userIdx from user where token =?
    `;
  const [[verifyPasswdTokenRow]] = await connection.query(
    verifyPasswdTokenQuery,
    token
  );
  return verifyPasswdTokenRow;
};

// 유저의 패스워드 재설정
exports.resetUserPasswd = async (connection, userIdx, passwd) => {
  const resetUserPasswdQuery = `
  UPDATE user SET passwd =?  WHERE userIdx = ?;
  `;
  const [resetUserPasswdRow] = await connection.query(resetUserPasswdQuery, [
    passwd,
    userIdx,
  ]);
  return resetUserPasswdRow;
};

// 유저의 userIntro 가져오기
exports.getUserIntro = async (connection, userIdx) => {
  const getUserIntroQuery = `
    select u.userIdx, u.email, u.userName, u.department, u.sex, u.admission, 
    ui.mbti, ui.introduce, ui.favorite 
    from user u left join user_intro ui 
    on u.userIdx = ui.userIdx where u.userIdx = ?;
  `;
  const [getUserIntroRow] = await connection.query(getUserIntroQuery, userIdx);
  return getUserIntroRow;
};

// 친구 신청 보내기 메서드
exports.sendFriendRequest = async (connection, userIdx, friendIdx) => {
  const sendFriendRequestQuery = `
    insert into friend(userIdx,friendIdx,status)
    values(?, ?, 'P');
  `;
  const [sendFriendRequestRow] = await connection.query(
    sendFriendRequestQuery,
    [userIdx, friendIdx]
  );
  return sendFriendRequestRow;
};

// 친구 요청을 받은 목록
exports.getFriendRequestCome = async (connection, userIdx) => {
  const getFriendRequestComeQuery = `
  select f.friendReqIdx,u.userIdx, u.userName as name, u.email from friend f 
  join user u on f.userIdx = u.userIdx where f.friendIdx = ? and f.status ="P";
  `;
  const [getFriendRequestComeRow] = await connection.query(
    getFriendRequestComeQuery,
    userIdx
  );
  return getFriendRequestComeRow;
};

// 친구 요청을 보낸 목록 
exports.getFriendRequestSend = async (connection, userIdx) => {
  const getFriendRequestSendQuery = `
  select f.friendReqIdx,u.userIdx, u.userName as name , u.email from friend f 
  join user u on f.friendIdx = u.userIdx where f.userIdx =? and f.status ="P";
`;
  const [getFriendRequestSendRow] = await connection.query(
    getFriendRequestSendQuery,
    userIdx
  );
  return getFriendRequestSendRow;
};

// 친구 요청 응답하기. 
exports.answerFriendRequest = async (connection, friendReqIdx, answer) =>{
  const acceptFriendRequestQuery =`
    update friend set status = ? where friendReqIdx = ?
  `
  const [acceptFriendRequestRow] = await connection.query(acceptFriendRequestQuery,[answer,friendReqIdx]);
  return acceptFriendRequestRow
}

// 친구 요청 거절하기 
exports.deleteFriendRequest = async(connection,friendReqIdx) =>{
  const deleteFriendRequestQuery = `
    DELETE FROM friend WHERE friendReqIdx = ?;
  `
  const [deleteFriendRequestRow] = await connection.query(deleteFriendRequestQuery,friendReqIdx);
  return deleteFriendRequestRow;

}

//친구들 목록 가져오기
exports.getFriendsList = async(connection, userIdx)=>{
  // 친구 요청 받은 것들에 대한 수락 리스트
  const getFriendsListedQuery =`
    select u.userIdx, u.userName as name, u.sex ,u.email from friend f 
    join user u on f.userIdx = u.userIdx where f.friendIdx = ? and f.status ="A";
  `
  // 친구 요청 보낸 것들에 대한 수락 리스트
  const getFriendsListingQuery = `
  select u.userIdx, u.userName as name , u.sex ,u.email from friend f 
  join user u on f.friendIdx = u.userIdx where f.userIdx =? and f.status ="A";
  `
  const [getFriendsListedRow] = await connection.query(getFriendsListedQuery,userIdx)
  const [getFriendsListingRow] = await connection.query(getFriendsListingQuery,userIdx)
  const [getFriendsList] = [[...getFriendsListedRow,...getFriendsListingRow]];

  return getFriendsList
}

// 받은 친구요청 갯수 확인하기
exports.requestedFriendList = async(connection,userIdx)=>{
  const requestedFriendListQuery =`
  select count(*) as count from friend f 
  join user u on f.userIdx = u.userIdx where f.friendIdx = ? and f.status ="P";
  `
  const [[requestedFriendListRow]] = await connection.query(requestedFriendListQuery , userIdx);
  return requestedFriendListRow
}