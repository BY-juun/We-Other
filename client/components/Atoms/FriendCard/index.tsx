import React from "react";
import useModal from "../../../Hooks/useModal";
import DetailFriendInfoModal from "../../Blocks/_Modal/DetailFriendInfoModal";
import { FriendInfo, FriendCardWrapper } from "./styles";

interface Props {
	name: string;
	age?: number;
	email: string;
	userIdx?: number;
}

const FriendCard = ({ name, age, email, userIdx }: Props) => {
	const [open, , openModal, closeModal] = useModal();
	return (
		<>
			<FriendCardWrapper onClick={userIdx ? openModal : () => { }}>
				<div>
					<img src="/defaultUser.png" alt="User" />
				</div>
				<FriendInfo>
					<span>
						<strong>이름 </strong>
						{name}
					</span>
					{age && <span>
						<strong>나이 </strong>
						{age}
					</span>}
					<span>
						<strong>이메일 </strong>
						{email}
					</span>
				</FriendInfo>
			</FriendCardWrapper>
			{open && <DetailFriendInfoModal userIdx={Number(userIdx)} onClose={closeModal} />}
		</>
	);
};

export default FriendCard;
