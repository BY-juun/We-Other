import React, { useCallback } from 'react'

const RequestAcceptBtn = () => {
	const accept = useCallback(() => {
		if (!window.confirm("* 요청을 수락하시겠어요?")) return;
		alert("* 이제 친구가 되었어요")
	}, [])
	return (
		<button onClick={accept}><img src="/accept.png" alt="수락" /></button>
	)
}

export default RequestAcceptBtn