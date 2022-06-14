import React, { useCallback } from 'react'
import { DummyFriend } from '../../../../../Types/Dummy'
import FriendCard from '../../../../Atoms/FriendCard'
import RequestAcceptBtn from '../../../../Atoms/RequestAccpetBtn'
import { ListWrapper, RequestCard } from '../styles'
const RequestedList = () => {
	return (
		<>
			<h2>받은 친구 요청</h2>
			<ListWrapper>
				{DummyFriend.map((friend) =>
					<RequestCard>
						<RequestAcceptBtn />
						<FriendCard friend={friend} />
					</RequestCard>
				)}
			</ListWrapper>
		</>
	)
}

export default RequestedList