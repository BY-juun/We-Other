import React from 'react'
import { useGetRequestedFriendListLength } from '../../../Hooks/Friends'
import { OtherItem, RequestLength } from '../../Layouts/Header/styles'

const GotoFriendListBtn = ({ onClick }: { onClick: () => void }) => {
	const { data } = useGetRequestedFriendListLength();
	return (
		<OtherItem onClick={onClick}>
			<span>친구목록</span>
			{data?.count && <RequestLength>{data?.count}</RequestLength>}
		</OtherItem>
	)
}

export default GotoFriendListBtn