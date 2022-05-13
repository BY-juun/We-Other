import React, { useCallback } from "react";
import { CustomInput } from "../../../Atoms/CustomInput/styles";
import { AccountTitle, SelectSex } from "../SignUpBlock/styles";

interface Props {
  userName: string;
  admission: string;
  department: string;
  sex: string;
  onChangeUserName: (e: any) => void;
  onChangeAdmission: (e: any) => void;
  onChangeDepartment: (e: any) => void;
  setSex: React.Dispatch<React.SetStateAction<string>>;
}

const StepTwo: (props: Props) => JSX.Element = ({ userName, onChangeUserName, admission, onChangeAdmission, department, onChangeDepartment, sex, setSex }) => {
  const clickSex = useCallback(
    (data: string) => () => {
      setSex(data);
    },
    []
  );

  return (
    <>
      <div>
        <AccountTitle>이름</AccountTitle>
        <CustomInput value={userName} onChange={onChangeUserName} type="" placeholder="" />
      </div>
      <div>
        <AccountTitle>학번</AccountTitle>
        <CustomInput value={admission} onChange={onChangeAdmission} type="" placeholder="" />
      </div>
      <div>
        <AccountTitle>학부</AccountTitle>
        <CustomInput value={department} onChange={onChangeDepartment} type="" placeholder="" />
      </div>
      <div>
        <AccountTitle>성별</AccountTitle>
        <SelectSex>
          <button style={{ background: sex === "M" ? "#6396FF" : "" }} onClick={clickSex("M")}>
            남자
          </button>
          <button style={{ background: sex === "W" ? "#C16175" : "" }} onClick={clickSex("W")}>
            여자
          </button>
        </SelectSex>
      </div>
    </>
  );
};

export default StepTwo;
