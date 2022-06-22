import MeetingRegisterTemplate from "components/Templates/MeetingRegister";
import React from "react";
import useCheckLogin from "../../../Hooks/useCheckLogin";
import { RegisterPageWrapper } from "./styles";

const MeetingRegister = () => {
  useCheckLogin();

  return (
    <RegisterPageWrapper>
      <MeetingRegisterTemplate />
    </RegisterPageWrapper>
  );
};

export default MeetingRegister;
