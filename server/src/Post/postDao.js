exports.insertPost = async (connection, insertParams) => {
  const insertPostQuery = `
        insert into post (userIdx,title,content)   
        values(?,?,?);
    `;
  const insertPostRow = await connection.query(insertPostQuery, insertParams);
  return insertPostRow;
};

exports.getPosts = async (connection) => {
  const getPostsQuery = `
        select * from post
    `;
  const [getPostsRow] = await connection.query(getPostsQuery);
  return getPostsRow;
};

exports.getPostUserIdx = async (connection, postIdx) => {
  const getPostUserIdxQuery = `
    select userIdx from post
    where postIdx = ?
  `;
  const [[getPostUserIdxRow]] = await connection.query(
    getPostUserIdxQuery,
    postIdx
  );
  console.log(getPostUserIdxRow);
  return getPostUserIdxRow;
};

exports.deletePost = async (connection, postIdx) => {
  const deletePostQuery = `
    delete from post where postIdx = ?;
`;
  const deletePostRow = await connection.query(deletePostQuery, postIdx);
  return deletePostRow;
};
