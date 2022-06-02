import PartnerCard from "components/Atoms/PartnerCard";
import React, { useEffect, useState } from "react";
import { PartnerType } from "Types/Meeting";
import { PartnerCardWrapper, RegisterPartnerWrapper } from "./styles";

interface Props {
  partner: PartnerType[];
  setPartner: React.Dispatch<React.SetStateAction<PartnerType[]>>;
}

const RegisterPartner = ({ partner, setPartner }: Props) => {
  return (
    <RegisterPartnerWrapper>
      <span>함께 참여할 사용자의 아이디를 입력해주세요.</span>
      <PartnerCardWrapper>
        {partner.map((_, idx) => {
          return <PartnerCard partner={partner} setPartner={setPartner} key={idx} idx={idx} />;
        })}
      </PartnerCardWrapper>
    </RegisterPartnerWrapper>
  );
};

export default RegisterPartner;
