import styled from "@emotion/styled";

export const CustomTextArea = styled.textarea`
  padding: 13px 20px;
  background: #f5f5f5;
  width: 100%;
  border: none;
  font-size: 15px;
  border-radius: 4px;
  min-height: 250px;
  resize: none;
  &:focus {
    outline: none;
    border: 1px solid #fc96a5;
  }
`;
