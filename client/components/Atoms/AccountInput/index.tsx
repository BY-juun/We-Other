import React from "react";
import { CustomInput } from "./styles";

interface Props {
  ref: React.Ref<HTMLInputElement>;
  placeholder: string;
  type: string;
}

const AccountInput = ({ ref, placeholder, type }: Props) => {
  return <CustomInput ref={ref} placeholder={placeholder} type={type} />;
};

export default AccountInput;
