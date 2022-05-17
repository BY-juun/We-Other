// 댓글 등록하기
exports.insertCommentOfPost = async(connection, userIdx, postIdx, content)=>{
    const insertCommentOfPostQuery = `
    INSERT INTO comment (userIdx, postIdx, content) VALUES (?, ?, ?);
    `
    const [insertCommentOfPostRow]= await connection.query(insertCommentOfPostQuery,[userIdx, postIdx, content]);
    return insertCommentOfPostRow;
}

// 단일 댓글 조회하기
exports.getCommentOfPost = async (connection,postIdx)=>{
    const getCommentOfPostQuery =`
        select commentIdx, userIdx,content, updatedAt as createdAt from comment where postIdx= ? and commentRef is null
    `
    const [getCommentOfPostRow]= await connection.query(getCommentOfPostQuery,postIdx);
    return getCommentOfPostRow;
}

//대댓글의 댓글 대상 조회하기
exports.getCommentOfcomment = async(connection,postIdx) =>{
    const getCommentOfcommentQuery =`
     select commentRef from comment  where postIdx =10 and commentRef is not null group by commentRef;
    `
    const [getCommentOfcommentRow]  = await connection.query(getCommentOfcommentQuery,postIdx);
    return getCommentOfcommentRow;

}

//대댓글의 내용 조회하기
exports.getCommentOfCommmentContent = async (connection, postIdx, commentRef) =>{
    const getCommentOfCommmentContentQuery  = `
        select userIdx, content, updatedAt as createdAt from comment where  postIdx = ? and commentRef = ?;
    `
    const [getCommentOfCommmentContentRow]  = await connection.query(getCommentOfCommmentContentQuery,[postIdx,commentRef]);
    return getCommentOfCommmentContentRow;
}


// 댓글의 익명 순서. 
exports.getOrderOfComment = async (connection,postIdx)=>{

    // const setQuery = `
    //     set @rownum = 0;
    // `
    // await connenction.query(setQuery);
    const getOrderOfCommentQuery = `
    select b.order, b.userIdx from 
    (select @RNUM:=@RNUM+1 as 'order',a.* from 
    (select * from comment where postIdx =? group by userIdx order by createdAt) as a,  ( SELECT @RNUM := 0 ) R
    ) as b;
    `
    const [getOrderOfCommentRow] = await connection.query(getOrderOfCommentQuery,postIdx);
    return getOrderOfCommentRow;
}

//대댓 등록하기
exports.insertCommentOfComment = async (connection, insertParams) =>{
    const [userIdx,postIdx,commentIdx,content] = insertParams;
    const insertCommentOfCommentQuery = `
        insert into comment(commentRef,userIdx,postIdx,content) 
        values(?,?,?,?)
        ;   
    `
    const [insertCommentOfCommentRow] = await connection.query(insertCommentOfCommentQuery,[commentIdx,userIdx,postIdx,content]);
    return insertCommentOfCommentRow;
}

//


//대댓의 존재 여부. 
exports.checkCommentOfCommentExist  = async (connection)=>{



}