import styled from "@emotion/styled";
import { mobile, tablet } from "Utils/styles";

export const RegisterPageWrapper = styled.div`
  padding: 1% 10%;
  padding-bottom: 5%;
`;

export const RegisterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    border: none;
    cursor: pointer;
    color: white;
    background: #fc96a5;
    border-radius: 4px;
    padding: 10px 25px;
    &:hover {
      background: #c16171;
    }
  }
`;

export const RegisterFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
  span {
    font-size: 18px;
  }
  select {
    padding: 13px 20px;
    background: #f5f5f5;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
      border: 1px solid #fc96a5;
    }
  }
`;

export const RegisterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2%;
  ${mobile} {
    grid-template-columns: 1fr;
  }
  ${tablet} {
    grid-template-columns: 1fr;
  }
`;

export const ContentItem = styled.div`
  position: relative;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
  border: 0.5px solid #c8c8c8;
  padding: 20px;
  width: 100%;
  max-height: 430px;
`;

export const AddFriendBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 80%;
  overflow: auto;
`;

export const AddFriendDescription = styled.span`
  font-size: 15px;
`;
