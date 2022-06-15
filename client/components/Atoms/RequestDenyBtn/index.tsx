import React, { useCallback } from 'react'
import { useDeleteFriendRequest } from '../../../Hooks/Friends';

const RequestDenyBtn = ({ reqIdx }: { reqIdx: number }) => {
	const { mutate } = useDeleteFriendRequest();

	const deny = useCallback(() => {
		if (!window.confirm("* 요청을 취소하시겠어요?")) return;
		mutate(reqIdx);
	}, [])
	return (
		<button onClick={deny}><img src="/deny.png" alt="거절" /></button>
	)
}

export default RequestDenyBtn