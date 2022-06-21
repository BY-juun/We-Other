import { CustomInput } from "components/Atoms/CustomInput/styles";
import React, { useCallback, useRef, useState } from "react";
import Modal from "Utils/Modal";
import { FindIdResponse } from "../../../../Types/User";
import useInput from '../../../../Hooks/useInput';
import { FindContentWrapper, SelectBtnWrapper, ShowUserEmailBox } from "./styles";
import { request } from "../../../../Utils/request";

interface Props {
	onClose: () => void;
}

const FindIdPwdModal = ({ onClose }: Props) => {
	const [mode, setMode] = useState("id");
	const nameRef = useRef<HTMLInputElement>(null);
	const studentNumRef = useRef<HTMLInputElement>(null);
	const [userEmail, setUserEmail, onChangeEmail] = useInput("");
	const [findIdFinish, setFindIdFinish] = useState(false);

	const FormItemList = [
		{ text: "이름", ref: nameRef },
		{ text: "학번", ref: studentNumRef }
	]

	const onClickModeBtn = useCallback(
		(mode: string) => () => {
			setMode(mode);
			setFindIdFinish(false);
		},
		[]
	);

	const submit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (mode === "id") {
			if (!nameRef.current || !studentNumRef.current) return;
			const data: FindIdResponse = await request("GET", `/user/find/id?userName=${nameRef.current.value}&admission=${studentNumRef.current.value}`);
			if (data.isSuccess) {
				setFindIdFinish(true);
				setUserEmail(data.result.email);
			}
			else alert(data.message);
		} else {
			if (!nameRef.current || !studentNumRef.current) return;
			const data = await request("GET", `/user/find/passwd?email=${userEmail}&userName=${nameRef.current.value}&admission=${studentNumRef.current.value}`);
			if (data?.isSuccess) {
				alert("* 이메일이 전송되었습니다. 이메일을 통해 비밀번호를 재설정해주세요.");
				onClose()
			}
			else alert(data?.message);
		}
	}, [mode, userEmail]);

	return (
		<Modal title="아이디/비밀번호 찾기" onClose={onClose}>
			<div>
				<SelectBtnWrapper>
					<button onClick={onClickModeBtn("id")} style={getBtnStyle(mode, "id")}>
						아이디 찾기
					</button>
					<button onClick={onClickModeBtn("pwd")} style={getBtnStyle(mode, "pwd")}>
						비밀번호 찾기
					</button>
				</SelectBtnWrapper>
				<FindContentWrapper>
					{findIdFinish === false ?
						<form onSubmit={submit}>
							{FormItemList?.map((v) => {
								return (<div key={v.text}>
									<span>{v.text}</span>
									<CustomInput ref={v.ref} />
								</div>)
							})}
							{mode === "pwd" && (
								<div>
									<span>아이디</span>
									<CustomInput onChange={onChangeEmail} value={userEmail} />
								</div>
							)}
							<div>
								<button>찾기</button>
							</div>
						</form>
						:
						<ShowUserEmailBox>
							회원님의 아이디는 <strong>{userEmail}</strong> 입니다
						</ShowUserEmailBox>}

				</FindContentWrapper>
			</div>
		</Modal>
	);
};



const getBtnStyle = (curMode: string, mode: string) => {
	if (curMode === mode) {
		return { color: "white", background: "#fc96a5" };
	} else {
		return { color: "black", background: "#f5f5f5" };
	}
};

export default FindIdPwdModal;
