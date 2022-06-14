import React from "react";
import { FriendType } from "Types/User";
import { FriendInfo, FriendCardWrapper } from "./styles";

const FriendCard = ({ friend }: { friend: FriendType; }) => {
	return (
		<FriendCardWrapper>
			<div>
				<img src="/defaultUser.png" alt="User" />
			</div>
			<FriendInfo>
				<span>
					<strong>이름 </strong>
					{friend.name}
				</span>
				<span>
					<strong>나이 </strong>
					{friend.age}
				</span>
				<span>
					<strong>이메일 </strong>
					{friend.email}
				</span>
			</FriendInfo>
		</FriendCardWrapper>
	);
};

export default FriendCard;
