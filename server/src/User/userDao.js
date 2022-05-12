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
  const [userIdxCheckRow] = await connection.query(userIdxCheckQuery, userIdx);
  return userIdxCheckRow;
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
  const [[getUserShortInfoRow]] = await connection.query(getUserShortInfoQuery, email);
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
