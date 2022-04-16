import styled from "@emotion/styled";

export const PostCardRoot = styled.div`
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 7px #333d4b26;
  border: 0.5px solid #c8c8c8;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 12px;
`;

export const PostWriter = styled.div`
  margin-bottom: 5px;
`;

export const PostContent = styled.div`
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 10px;
`;

export const PostDate = styled.div`
  color: #c8c8c8;
`;

export const EtcArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EtcLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const EtcItem = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  span {
    margin-top: 3px;
  }
`;

export const EtcItem2 = styled.div`
  margin-top: 3px;
  display: flex;
  align-items: center;
  gap: 3px;
`;
