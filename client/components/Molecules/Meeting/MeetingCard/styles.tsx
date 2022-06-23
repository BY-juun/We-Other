import styled from "@emotion/styled";

export const MeetingCardWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff 0 0 no-repeat padding-box;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
  height: 100%;
  min-height: 300px;
  margin-bottom: 25px;
  &:hover {
    transition-duration: 500ms;
    transform: scale(1) translateY(-7px);
  }
`;

export const ContentBox = styled.div`
  padding: 15px 10px;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  div {
    width: 100%;
    height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    h4 {
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    h5 {
      opacity: 0.8;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    span {
      font-size: 13px;
      opacity: 0.6;
    }
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 60%;
  background: #fc96a5;
  display: flex;
  flex-flow: wrap;
  div {
    border: 1px solid white;
  }
`;
