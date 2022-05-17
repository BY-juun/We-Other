exports.insertCommentOfPost = async(connection, userIdx, postIdx, content)=>{
    const insertCommentOfPostQuery = `
    INSERT INTO comment (userIdx, postIdx, content) VALUES (?, ?, ?);
    `
    const [insertCommentOfPostRow]= await connection.query(insertCommentOfPostQuery,[userIdx, postIdx, content]);
    return insertCommentOfPostRow;
}
exports.getOrderOfComment = async (connection,postIdx)=>{

    // const setQuery = `
    //     set @rownum = 0;
    // `
    // await connenction.query(setQuery);
    const getOrderOfCommentQuery = `
    select b.order, b.userIdx from 
    (select @RNUM:=@RNUM+1 as 'order',a.* from 
    (select * from comment group by userIdx order by createdAt) as a,  ( SELECT @RNUM := 0 ) R
    where a.postIdx = ?
    ) as b;
    `
    const [getOrderOfCommentRow] = await connection.query(getOrderOfCommentQuery,postIdx);
    return getOrderOfCommentRow;
}