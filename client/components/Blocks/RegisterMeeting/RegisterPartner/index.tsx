import PartnerCard from "components/Atoms/PartnerCard";
import React from "react";
import { PartnerType } from "Types/Meeting";
import { PartnerCardWrapper, RegisterPartnerWrapper } from "./styles";

interface Props {
  partner: PartnerType[];
}

const RegisterPartner = ({ partner }: Props) => {
  return (
    <RegisterPartnerWrapper>
      <span>함께 참여할 사용자의 아이디를 입력해주세요.</span>
      <PartnerCardWrapper>
        {partner.map((_, idx) => {
          return <PartnerCard partner={partner} key={idx} idx={idx} />;
        })}
      </PartnerCardWrapper>
    </RegisterPartnerWrapper>
  );
};

export default RegisterPartner;
