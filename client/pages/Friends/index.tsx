import MyFriend from "components/Blocks/Friend/MyFriends";
import React from "react";
import AddFriendBtn from "components/Atoms/AddFriendBtn";
import { FriendsItem, FriendsWrapper, TitleArea } from "./styles";
import FriendRequest from "../../components/Blocks/Friend/FriendRequest";

const Friend = () => {
	return (
		<FriendsWrapper>
			<FriendsItem>
				<TitleArea>
					<h2>친구목록</h2>
					<AddFriendBtn />
				</TitleArea>
				<MyFriend />
			</FriendsItem>
			<FriendsItem>
				<FriendRequest />
			</FriendsItem>
		</FriendsWrapper>
	);
};

export default Friend;
