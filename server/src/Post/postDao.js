exports.insertPost = async (connection, insertParams) => {
  const insertPostQuery = `
        insert into post (userIdx,title,content)   
        values(?,?,?);
    `;
  const insertPostRow = await connection.query(insertPostQuery, insertParams);
  return insertPostRow;
};
