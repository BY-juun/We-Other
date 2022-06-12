import { useAppDispatch } from "Hooks/useAppDispatch";
import React, { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { ReducerType } from "store/rootReducer";
import { gotoNextStep, setAdmission, setDepartment, setSex, setUsername, SignUpState } from "store/slices/SignUp";
import { CustomInput } from "../../../Atoms/CustomInput/styles";
import { AccountTitle, SelectSex, SignUpBtn } from "../SignUpBlock/styles";

const StepTwo = () => {
  const dispatch = useAppDispatch();
  const { sex } = useSelector<ReducerType, SignUpState>((state) => state.signupSlice);
  const nameRef = useRef<HTMLInputElement>(null);
  const admissionRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);

  const inputs = [
    { text: "이름", ref: nameRef },
    { text: "학번", ref: admissionRef },
    { text: "학과", ref: departmentRef },
  ];

  const selectSex = useCallback(
    (data: string) => () => {
      dispatch(setSex(data));
    },
    []
  );

  const validationCheck = useCallback(() => {
    if (!nameRef.current) return alert("*이름을 입력해주세요");
    if (!sex) return alert("성별을 확인해주세요");
    if (!departmentRef.current) return alert("학부를 입력해주세요");
    if (!admissionRef.current) return alert("학번을 입력해주세요");
    dispatch(setUsername(nameRef.current.value));
    dispatch(setAdmission(admissionRef.current.value));
    dispatch(setDepartment(departmentRef.current.value));
    return true;
  }, [sex]);

  const Submit = useCallback(() => {
    if (!validationCheck()) return;
    dispatch(gotoNextStep());
  }, [sex]);

  return (
    <>
      {inputs.map((input) => (
        <div key={input.text}>
          <AccountTitle>{input.text}</AccountTitle>
          <CustomInput ref={input.ref} />
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
