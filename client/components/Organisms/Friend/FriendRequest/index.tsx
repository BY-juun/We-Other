import React from 'react'
import RequestedList from './RequestedList'
import RequestList from './RequestList'
import { RequestListItem } from './styles'

const FriendRequest = () => {
	return (
		<>
			<RequestListItem>
				<RequestedList />
			</RequestListItem>
			<RequestListItem>
				<RequestList />
			</RequestListItem>
		</>
	)
}

export default FriendRequest