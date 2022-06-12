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

//email로 userIdx 가져오기
exports.getUserIdx = async (connection, email) => {
  const getUserIdxQuery = `
    select userIdx from user where email = ?;
  `;
  console.log("test");
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

// 친구 요청을 받은
exports.getFriendRequestCome = async (connection, userIdx) => {
  const getFriendRequestComeQuery = `
  SELECT * FROM friend where friendIdx=?;
  `;
  const [getFriendRequestComeRow] = await connection.query(
    getFriendRequestComeQuery,
    userIdx
  );
  return getFriendRequestComeRow;
};
exports.getFriendRequestSend = async (connection, userIdx) => {
  const getFriendRequestSendQuery = `
  SELECT * FROM friend where userIdx=?;
`;
  const [getFriendRequestSendRow] = await connection.query(
    getFriendRequestSendQuery,
    userIdx
  );
  return getFriendRequestSendRow;
};
