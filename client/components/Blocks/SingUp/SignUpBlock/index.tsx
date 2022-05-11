import { CustomInput } from "components/Atoms/CustomInput/styles";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { useSignUp } from "_Query/User";
import useInput from "../../../../Utils/Hooks/useInput";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import { Active, SignUpBtn, SignUpContainer, Stepper } from "./styles";

const SignUpBlock = () => {
	const [email, , onChangeEmail] = useInput("");
	const [password, , onChangePassword] = useInput("");
	const [passwordCheck, , onChangePasswordCheck] = useInput("");
	const [userName, , onChangeUserName] = useInput("");
	const [admission, , onChangeAdmission] = useInput("");
	const [department, , onChangeDepartment] = useInput("");
	const [sex, setSex] = useState("");
	const [step, setStep] = useState<number>(1);
	const router = useRouter();

	const signUpSuccess = useCallback(() => {
		alert("*회원가입에 성공하셨습니다!");
		return router.push("/");
	}, [router]);

	const signupMutation = useSignUp(signUpSuccess);

	const validationCheck = useCallback(() => {
		if (!userName) {
			return alert("*이름을 입력해주세요");
		}
		if (!sex) {
			return alert("성별을 확인해주세요");
		}
		if (!department) {
			return alert("학부를 입력해주세요");
		}
		if (!admission) {
			return alert("학번을 입력해주세요");
		}
		return true;
	}, [sex, userName, department, admission]);

	const Submit = useCallback(() => {
		if (!validationCheck()) return;
		const reqData = {
			email: email,
			passwd: password,
			userName: userName,
			department: department,
			sex: sex,
			admission: admission,
		};

		signupMutation.mutate(reqData);
	}, [email, password, userName, department, admission, sex, signupMutation, validationCheck]);

	return (
		<SignUpContainer>
			<Stepper>
				{step === 1 && <><Active></Active><div></div></>}
				{step === 2 && <><div></div><Active></Active></>}
			</Stepper>
			{step === 1 && <>
				<StepOne
					email={email} onChangeEmail={onChangeEmail}
					password={password} onChangePassword={onChangePassword}
					passwordCheck={passwordCheck} onChangePasswordCheck={onChangePasswordCheck}
					setStep={setStep} />
			</>}
			{step === 2 &&
				<>
					<StepTwo
						userName={userName} onChangeUserName={onChangeUserName}
						admission={admission} onChangeAdmission={onChangeAdmission}
						department={department} onChangeDepartment={onChangeDepartment}
						sex={sex} setSex={setSex}
					/>
					<SignUpBtn onClick={Submit}>회원가입</SignUpBtn>
				</>
			}
		</SignUpContainer>
	);
};

export default SignUpBlock;
