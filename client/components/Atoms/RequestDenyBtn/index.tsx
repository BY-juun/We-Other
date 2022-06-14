import React, { useCallback } from 'react'

const RequestDenyBtn = () => {
	const deny = useCallback(() => {
		if (!window.confirm("* 요청을 취소하시겠어요?")) return;
		alert("* 요청이 취소되었어요");
	}, [])
	return (
		<button onClick={deny}><img src="/deny.png" alt="거절" /></button>
	)
}

export default RequestDenyBtn