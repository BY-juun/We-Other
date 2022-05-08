import styled from "@emotion/styled";
import { mobile, tablet, tablet_landscape } from "Utils/styles";

export const PostFormWrapper = styled.div`
  margin-top: 10%;
  padding: 0 10%;
  ${mobile} {
    margin-top: 25%;
  }
  ${tablet} {
    margin-top: 20%;
  }
`;

export const PostFormTitle = styled.div`
  margin-bottom: 25px;
  font-size: 20px;
`;

export const PostFormBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageAddBtn = styled.button`
  background: white;
  border: none;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  border: none;
  background: #fc96a5;
  color: white;
  font-size: 15px;
  padding: 10px 30px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    img {
      max-width: 100px;
      max-height: 100px;
    }
    button {
      cursor: pointer;
      margin-left: 10px;
      border: none;
      background: #6b6869;
      padding: 5px 10px;
      border-radius: 4px;
      color: white;
    }
  }
`;
