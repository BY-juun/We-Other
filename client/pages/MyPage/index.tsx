import MyDetailInfo from "components/Blocks/MyPage/MyDetailInfo";
import React from "react";
import { DummyUser } from "Types/Dummy";
import MyInfo from "../../components/Blocks/MyPage/MyInfo";
import useCheckLogin from "../../Hooks/useCheckLogin";
import { useGetUserInfo } from "../../Hooks/User";
import { UserInfo } from "../../Types/User";
import PageLoading from "../../Utils/PageLoading";
import { MypageItem, MyPageWrapper } from "./styles";

const MyPage = () => {
	useCheckLogin();
	const { data: UserInfo, isLoading } = useGetUserInfo();

	if (isLoading) return <>{PageLoading(isLoading)}</>;

	return (
		<MyPageWrapper>
			<MypageItem>
				<h2>기본정보</h2>
				<MyInfo UserInfo={UserInfo as UserInfo} />
			</MypageItem>
			<MypageItem>
				<h2>추가정보</h2>
				<MyDetailInfo UserInfo={UserInfo as UserInfo} />
			</MypageItem>
		</MyPageWrapper>
	);
};

export default MyPage;
