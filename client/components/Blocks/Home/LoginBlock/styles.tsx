import styled from "@emotion/styled";
import { customBtn, mobile, tablet, tablet_landscape } from "Utils/styles";

export const LoginWrapper = styled.form`
  ${mobile} {
    width: 100%;
  }
  ${tablet} {
    width: 50%;
  }
  ${tablet_landscape} {
    width: 35%;
  }
  margin-top: 25px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  padding: 10px;
	${customBtn}
`;

export const EtcWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c8c8c8;
  margin-top: 15px;
  font-size: 15px;
  gap: 25px;
  margin-bottom: 25px;
  ${mobile} {
    margin-top: 15px;
    margin-bottom: 25px;
  }
  button {
    border: none;
    color: black;
    background: none;
    cursor: pointer;
    &:hover {
      color: #fc96a5;
    }
  }
`;
