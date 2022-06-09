import { CustomInput } from "components/Atoms/CustomInput/styles";
import { ContentWrapper } from "components/Layouts/Content/styles";
import { useRouter } from "next/router";
import React, { useCallback, useRef, useState } from "react";
import useCheckToken from "../../../Hooks/useCheckToken";
import { customAxios } from "../../../Utils/customAxios";
import PageLoading from "../../../Utils/PageLoading";
import { ResetWrapper } from "./styles";

const reset = () => {
	const { push } = useRouter();
	const newPassword = useRef<HTMLInputElement>(null);
	const newPasswordCheck = useRef<HTMLInputElement>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [userIdx, setUserIdx] = useState<number>(0);

	const submitNewPassword = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!newPassword.current || !newPasswordCheck.current) return;
		if (newPassword.current.value !== newPasswordCheck.current.value) return alert("* 비밀번호와 비밀번호 확인이 일치하지 않습니다");
		const { data } = await customAxios.put('/user/reset/passwd', { userIdx: userIdx, passwd: newPassword.current.value });
		if (data.isSuccess) {
			alert("* 비밀번호가 변경되었습니다. 메인화면으로 이동합니다.");
			push('/');
		}
		else alert(data.message);
	}, [userIdx]);

	useCheckToken(setLoading, setUserIdx);

	if (loading) return <> {PageLoading(loading)}</>

	return (
		<ContentWrapper>
			<ResetWrapper>
				<h1>비밀번호 재설정</h1>
				<form onSubmit={submitNewPassword}>
					<div>
						<span>신규 비밀번호</span>
						<CustomInput type="password" ref={newPassword} />
					</div>
					<div>
						<span>신규 비밀번호 확인</span>
						<CustomInput type="password" ref={newPasswordCheck} />
					</div>
					<button>완료</button>
				</form>
			</ResetWrapper>
		</ContentWrapper>
	);
};

export default reset;
