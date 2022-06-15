import React, { useCallback, useRef, useState } from "react";
import { CustomInput } from "components/Atoms/CustomInput/styles";
import { AccountTitle, SignUpBtn } from "../SignUpBlock/styles";
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { CheckDuplicate, SignUpEmail, SignUpPassword, SignUpStep } from "store/signup";
import { InputBox, ValidationMessage } from "./styles";
import EmailDuplicateCheckBtn from "../../../Atoms/EmailDuplicateCheckBtn";

const reg = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;

const StepOne = () => {
	const setStep = useSetRecoilState(SignUpStep)
	const checkEmailDuplicate = useRecoilValue(CheckDuplicate);
	const [email, setEmail] = useRecoilState(SignUpEmail);
	const [password, setPassword] = useRecoilState(SignUpPassword);
	const [passwordValidation, setPasswordValidation] = useState(false);
	const [passwordCheck, setPasswordCheck] = useState("");

	const onChangeEmail = useCallback((e) => {
		setEmail(e.target.value);
	}, [])

	const onChangePassword = useCallback((e) => {
		if (reg.test(e.target.value)) setPasswordValidation(true);
		else setPasswordValidation(false);
		setPassword(e.target.value);
	}, [])

	const onChangePasswordCheck = useCallback((e) => {
		setPasswordCheck(e.target.value);
	}, [])

	const gotoStepTwo = useCallback(() => {
		if (!checkEmailDuplicate) return alert("* 이메일 중복확인을 해주세요");
		if (!passwordValidation) return alert("* 비밀번호를 형식에 맞춰주세요");
		else if (password !== passwordCheck) return alert("* 비밀번호와 비밀번호 확인이 일치하지 않습니다");
		setStep(2);
	}, [email, password, passwordCheck, checkEmailDuplicate, passwordValidation]);


	return (
		<>
			<div>
				<AccountTitle>ID(이메일 주소)</AccountTitle>
				<InputBox>
					<CustomInput disabled={checkEmailDuplicate} value={email} onChange={onChangeEmail} />
					<EmailDuplicateCheckBtn />
				</InputBox>
			</div>
			<div>
				<AccountTitle>비밀번호</AccountTitle>
				<CustomInput value={password} onChange={onChangePassword} type="password" />
				{(password !== "" && !passwordValidation) && <ValidationMessage>최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자가 필요합니다</ValidationMessage>}
			</div>
			<div>
				<AccountTitle>비밀번호 확인</AccountTitle>
				<CustomInput value={passwordCheck} onChange={onChangePasswordCheck} type="password" />
			</div>
			<SignUpBtn onClick={gotoStepTwo}>다음</SignUpBtn>
		</>
	);
};

export default StepOne;
