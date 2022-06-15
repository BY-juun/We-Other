import React from "react";
import SignUpStepper from "../SignUpStepper";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import { SignUpContainer, Stepper } from "./styles";
import { useRecoilValue } from 'recoil';
import { SignUpStep } from "store/signup";

const SignUpBlock: () => JSX.Element = () => {
	const step = useRecoilValue(SignUpStep);
	return (
		<SignUpContainer>
			<Stepper>
				<SignUpStepper />
			</Stepper>
			{step === 1 && <StepOne />}
			{step === 2 && <StepTwo />}
		</SignUpContainer>
	);
};

export default SignUpBlock;
