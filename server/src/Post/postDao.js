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

// 단일 게시물 가져오기
exports.getPost = async (connection, postIdx) => {
  const getPostQuery = `
    select p.userIdx,p.postIdx,p.title,p.content,i.imageIdx,i.url, p.updatedAt from post p
    left join image i on i.postIdx = p.postIdx
    where p.postIdx = ?;
`;
  const [getPostRow] = await connection.query(getPostQuery, postIdx);
  return getPostRow;
};

// 모든 쿼리 조회 (이미지에 대한 여러개의 게시물은 하나의 이미지만 보여줄 수 있도록. )
exports.getPosts = async (connection) => {
  const getPostsQuery = `
      select  p.userIdx, p.postIdx,p.title,p.content,i.imageIdx,i.url, p.updatedAt from post p
      left join image i on i.postIdx = p.postIdx
      group by p.postIdx ;    
    `;
  const [getPostsRow] = await connection.query(getPostsQuery);
  return getPostsRow;
};

// 특정 게시물의 유저 인덱스 가져오기
exports.getPostUserIdx = async (connection, postIdx) => {
  const getPostUserIdxQuery = `
    select userIdx from post
    where postIdx = ?
  `;
  const [[getPostUserIdxRow]] = await connection.query(
    getPostUserIdxQuery,
    postIdx
  );
  return getPostUserIdxRow;
};

// 게시물 지우기
exports.deletePost = async (connection, postIdx) => {
  const deletePostQuery = `
    delete from post where postIdx = ?;
`;
  const deletePostRow = await connection.query(deletePostQuery, postIdx);
  return deletePostRow;
};


//게시물의 이미지의 존재여부 파악
exports.checkImageNum  = async (connection,postIdx)=>{
  const checkImageNumQuery =`
    select exists (select count(*) from image where postIdx = ? ) as exist;
  `;
  const [[checkImageNumRow]] = await connection.query(checkImageNumQuery,postIdx);
    return checkImageNumRow.exist;
}