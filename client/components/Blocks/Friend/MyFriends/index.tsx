import FriendCard from "components/Atoms/FriendCard";
import React from "react";
import { DummyFriend } from "Types/Dummy";
import { FriendListRoot } from "./styles";

const MyFriend = () => {
	const friends = DummyFriend;
	return (
		<FriendListRoot>
			{friends.length > 0 ? (
				<>
					{friends.map((friend) => (
						<FriendCard friend={friend} />
					))}
				</>
			) : (
				<span>아직 등록된 친구가 없어요.</span>
			)}
		</FriendListRoot>
	);
};

export default MyFriend;
