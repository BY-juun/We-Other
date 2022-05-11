exports.insertCommentOfPost = async(connection, userIdx, postIdx, content)=>{
    const insertCommentOfPostQuery = `
    INSERT INTO comment (userIdx, postIdx, content) VALUES (?, ?, ?);
    `
    const [insertCommentOfPostRow]= await connection.query(insertCommentOfPostQuery,[userIdx, postIdx, content]);
    return insertCommentOfPostRow;
}