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
exports.emailCheck = async (connection, email) => {
  const emailCheckQuery = `
    select exists (
    select * from user where email = ?
    ) as exist
`;
  const [emailCheckRow] = await connection.query(emailCheckQuery, email);
  return emailCheckRow;
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
