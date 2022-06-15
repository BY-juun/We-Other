import React, { useCallback } from 'react'
import { useReplyFriendRequest } from '../../../Hooks/Friends'

const RequestDeleteBtn = ({ reqIdx, name }: { reqIdx: number, name: string }) => {
	const { mutate } = useReplyFriendRequest();
	const deleteRequest = useCallback(() => {
		if (!window.confirm("* 요청을 거절하시겠어요?")) return;
		mutate({ name: name, reqIdx: reqIdx, answer: "거절" });
	}, [])
	return (
		<button onClick={deleteRequest}><img src="/delete.png" alt="수락" /></button>
	)
}

export default RequestDeleteBtn