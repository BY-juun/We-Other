import { CustomInput } from "components/Atoms/CustomInput/styles";
import React, { useCallback, useRef, useState } from "react";
import Modal from "Utils/Modal";
import { FindContentWrapper, SelectBtnWrapper } from "./styles";

interface Props {
  onClose: () => void;
}

const FindIdPwdModal = ({ onClose }: Props) => {
  const [mode, setMode] = useState("id");
  const nameRef = useRef<HTMLInputElement>(null);
  const studentNumRef = useRef<HTMLInputElement>(null);
  const IdRef = useRef<HTMLInputElement>(null);

  const onClickModeBtn = useCallback(
    (mode: string) => () => {
      setMode(mode);
    },
    []
  );

  const submit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mode === "id") {
      if (!nameRef.current || !studentNumRef.current) return;
      console.log(nameRef.current.value);
      console.log(studentNumRef.current.value);
    } else {
      if (!nameRef.current || !studentNumRef.current || !IdRef.current) return;
      console.log(nameRef.current.value);
      console.log(studentNumRef.current.value);
      console.log(IdRef.current.value);
    }
  }, []);

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
          <form onSubmit={submit}>
            <div>
              <span>이름</span>
              <CustomInput ref={nameRef} />
            </div>
            <div>
              <span>학번</span>
              <CustomInput ref={studentNumRef} />
            </div>
            {mode === "pwd" && (
              <div>
                <span>아이디</span>
                <CustomInput ref={IdRef} />
              </div>
            )}
            <div>
              <button>찾기</button>
            </div>
          </form>
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
