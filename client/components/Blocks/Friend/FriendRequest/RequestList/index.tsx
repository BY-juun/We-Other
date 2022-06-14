import React from 'react'
import { DummyFriend } from '../../../../../Types/Dummy'
import FriendCard from '../../../../Atoms/FriendCard'
import RequestDenyBtn from '../../../../Atoms/RequestDenyBtn'
import { ListWrapper, RequestCard } from '../styles'

const RequestList = () => {
	return (
		<>
			<h2>보낸 친구 요청</h2>
			<ListWrapper>
				{DummyFriend.map((friend) =>
					<RequestCard>
						<RequestDenyBtn />
						<FriendCard friend={friend} />
					</RequestCard>
				)}
			</ListWrapper>
		</>
	)
}

export default RequestList
