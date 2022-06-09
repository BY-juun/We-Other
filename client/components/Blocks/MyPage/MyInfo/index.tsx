import React from 'react'
import { useGetUserInfo } from '../../../../Hooks/User';
import PageLoading from '../../../../Utils/PageLoading';
import AdditionalInfoBtn from '../../../Atoms/AdditionalInfoBtn';
import ResetBtn from '../../../Atoms/ResetPwdBtn';
import { MyInfoItem, MyInfoRoot, MyInfoTitle } from './styles';

const MyInfo = () => {
	const { data: UserInfo, isLoading } = useGetUserInfo();

	if (isLoading) return <>{PageLoading(isLoading)}</>

	return (
		<>
			<MyInfoRoot>
				<MyInfoItem>
					<MyInfoTitle>이메일</MyInfoTitle><div>{UserInfo?.email}</div>
				</MyInfoItem>
				<MyInfoItem>
					<MyInfoTitle>비밀번호</MyInfoTitle><ResetBtn email={String(UserInfo?.email)} />
				</MyInfoItem>
				<MyInfoItem>
					<MyInfoTitle>추가정보 등록</MyInfoTitle>
					<AdditionalInfoBtn />
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
				<MyInfoItem>
					<MyInfoTitle>관심사</MyInfoTitle><div>어쩌구 저쩌구 </div>
				</MyInfoItem>
			</MyInfoRoot>
		</>
	)
}


export default MyInfo