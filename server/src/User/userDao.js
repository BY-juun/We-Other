exports.insertUser = async (connection, insertUserParams) => {
    const insertUserQuery = `
     INSERT INTO user (email, passwd, userName, department, sex, admission)
        VALUES (?,?,?,?,?,?);    
    `
    const [insertUserRow] = await connection.query(insertUserQuery, insertUserParams);
    return insertUserRow;
}