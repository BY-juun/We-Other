import React from 'react'
import { useGetUserInfo } from '../../../../Hooks/User';
import { MyInfoItem, MyInfoRoot, MyInfoTitle } from './styles';

const MyInfo = () => {
	const { data: UserInfo, isLoading } = useGetUserInfo();
	console.log(UserInfo);

	if (isLoading) return <div></div>
	return (
		<MyInfoRoot>
			<MyInfoItem>
				<MyInfoTitle>이메일</MyInfoTitle><div>{UserInfo?.email}</div>
			</MyInfoItem>
			<MyInfoItem>
				<MyInfoTitle>비밀번호</MyInfoTitle><button>재설정</button>
			</MyInfoItem>
			<MyInfoItem>
				<MyInfoTitle>추가정보 등록 여부</MyInfoTitle><div style={{ color: "red" }}>미등록</div>
			</MyInfoItem>
			<MyInfoItem>
				<MyInfoTitle>이름</MyInfoTitle><div>{UserInfo?.userName}</div>
			</MyInfoItem>
			<MyInfoItem>
				<MyInfoTitle>학과</MyInfoTitle><div>{UserInfo?.department}</div>
			</MyInfoItem>
			<MyInfoItem>
				<MyInfoTitle>학번</MyInfoTitle><div>{UserInfo?.admission}</div>
			</MyInfoItem>
			<MyInfoItem>
				<MyInfoTitle>MBTI</MyInfoTitle><div>{UserInfo?.admission}</div>
			</MyInfoItem>
			<MyInfoItem>
				<MyInfoTitle>간단한 자기소개</MyInfoTitle><div>{UserInfo?.admission}</div>
			</MyInfoItem>
		</MyInfoRoot>
	)
}

export default MyInfo