exports.insertPost = async (connection, insertParams) => {
  const insertPostQuery = `
        insert into post (userIdx,title,content)   
        values(?,?,?);
    `;
  const [insertPostRow] = await connection.query(insertPostQuery, insertParams);
  return insertPostRow;
};

exports.insertImage = async (connection, path) => {
  const insertImageQuery = `
    insert into image (url)
    values(?);
`;
  const [insertImageRow] = await connection.query(insertImageQuery, path);
  return insertImageRow;
};
exports.mappingPostImg = async (connection, postIdx, imageIdx) => {
  const mappingPostImgQuery = `
    update image set postIdx = ? where imageIdx = ?
    `;
  const [mappingPostImgRow] = await connection.query(mappingPostImgQuery, [
    postIdx,
    imageIdx,
  ]);
  return mappingPostImgRow;
};
exports.getPost = async (connection, postIdx) => {
  const getPostQuery = `
    select p.userIdx,p.title,p.content,i.imageIdx,i.url, p.updatedAt from post p
    left join image i on i.postIdx = p.postIdx
    where i.postIdx is not null and p.postIdx = ?;
`;
  const [getPostRow] = await connection.query(getPostQuery, postIdx);
  return getPostRow;
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
