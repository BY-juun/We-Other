import React, { useCallback } from 'react'
import { CustomInput } from '../../../Atoms/CustomInput/styles'
import { AccountTitle, SignUpBtn } from '../SignUpBlock/styles'

interface Props {
	email: string;
	password: string;
	passwordCheck: string;
	onChangeEmail: (e: any) => void;
	onChangePassword: (e: any) => void;
	onChangePasswordCheck: (e: any) => void;
	setStep: React.Dispatch<React.SetStateAction<number>>
}


const StepOne = ({ email, onChangeEmail, password, onChangePassword, passwordCheck, onChangePasswordCheck, setStep }: Props) => {

	const gotoNextStep = useCallback(() => {
		if (!email) {
			return alert("*이메일을 입력해주세요");
		}
		if (!password) {
			return alert("*비밀번호를 입력해주세요");
		}
		if (!passwordCheck || password !== passwordCheck) {
			return alert("*비밀번호 확인을 다시 입력해주세요");
		}
		setStep((prev) => prev + 1);
	}, [email, password, passwordCheck])

	return (
		<>
			<div>
				<AccountTitle>ID(이메일주소)</AccountTitle>
				<CustomInput value={email} onChange={onChangeEmail} type="email" placeholder="" />
			</div>
			<div>
				<AccountTitle>비밀번호</AccountTitle>
				<CustomInput value={password} onChange={onChangePassword} type="password" placeholder="" />
			</div>
			<div>
				<AccountTitle>비밀번호 확인</AccountTitle>
				<CustomInput value={passwordCheck} onChange={onChangePasswordCheck} type="password" placeholder="" />
			</div>
			<SignUpBtn onClick={gotoNextStep}>다음</SignUpBtn>
		</>
	)
}

export default StepOne
