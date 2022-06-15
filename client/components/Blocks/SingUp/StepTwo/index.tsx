import React, { useCallback } from "react";
import { useSignUp } from "Hooks/User";
import { CustomInput } from "components/Atoms/CustomInput/styles";
import { AccountTitle, SelectSex, SignUpBtn } from "../SignUpBlock/styles";
import { useRecoilValue, useRecoilState } from 'recoil';
import { SignUpEmail, SignUpPassword, SignUpUserName, SignUpAdmission, SignUpDepartment, SignUpSex } from "store/signup";

const StepTwo = () => {
	const signupMutation = useSignUp();
	const email = useRecoilValue(SignUpEmail);
	const password = useRecoilValue(SignUpPassword);
	const [name, setName] = useRecoilState(SignUpUserName);
	const [admission, setAdmission] = useRecoilState(SignUpAdmission);
	const [department, setDepartment] = useRecoilState(SignUpDepartment);
	const [sex, setSex] = useRecoilState(SignUpSex);


	const selectSex = useCallback(
		(data: string) => () => {
			setSex(data);
		},
		[]
	);

	const inputs = [
		{ text: "이름", value: name, setState: setName },
		{ text: "학번", value: admission, setState: setAdmission },
		{ text: "학과", value: department, setState: setDepartment },
	]

	const onChange = useCallback((e, fn) => {
		fn(e.target.value);
	}, [])

	const validationCheck = useCallback(() => {
		if (name === "") return alert("*이름을 입력해주세요");
		if (sex === "") return alert("성별을 확인해주세요");
		if (department === "") return alert("학부를 입력해주세요");
		if (admission === "") return alert("학번을 입력해주세요");
		return true;
	}, [sex]);

	const Submit = useCallback(() => {
		if (!validationCheck()) return;
		const reqData = { email: email, passwd: password, userName: name, department: department, sex: sex, admission: admission }
		signupMutation.mutate(reqData);
	}, [sex]);

	return (
		<>
			{inputs.map((input) => (
				<div key={input.text}>
					<AccountTitle>{input.text}</AccountTitle>
					<CustomInput value={input.value} onChange={(e) => onChange(e, input.setState)} />
				</div>
			))}
			<div>
				<AccountTitle>성별</AccountTitle>
				<SelectSex>
					<button style={{ background: sex === "M" ? "#6396FF" : "" }} onClick={selectSex("M")}>
						남자
					</button>
					<button style={{ background: sex === "W" ? "#C16175" : "" }} onClick={selectSex("W")}>
						여자
					</button>
				</SelectSex>
			</div>
			<SignUpBtn onClick={Submit}>회원가입</SignUpBtn>
		</>
	);
};

export default StepTwo;
