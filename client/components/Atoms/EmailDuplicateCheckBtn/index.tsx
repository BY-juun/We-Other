import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CheckDuplicate, SignUpEmail } from "../../../store/signup";
import { customAxios } from "../../../Utils/customAxios";

const EmailDuplicateCheckBtn = () => {
	const [checkDuplicate, setCheckDuplicate] = useRecoilState(CheckDuplicate);
	const email = useRecoilValue(SignUpEmail);

	const clickCheckDuplicate = useCallback(async () => {
		const { data } = await customAxios.get(`/user/email/duplicate?email=${email}`);
		if (data?.isSuccess) {
			alert("* 사용 가능한 이메일입니다");
			setCheckDuplicate(true);
		}
		else return alert(data.message);
	}, [email]);

	return (
		<button onClick={clickCheckDuplicate} disabled={checkDuplicate}>{checkDuplicate ? "확인완료" : "중복확인"}</button>
	)
}
export default EmailDuplicateCheckBtn;