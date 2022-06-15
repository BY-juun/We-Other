import styled from "@emotion/styled";

export const FriendListRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 90%;
  overflow: auto;
  overflow-x: hidden;
`;

export const FriendCardWrapper = styled.div`
	cursor : pointer;
	&:hover {
		strong {
			color :#c16171;
		}
		color : #fc96a5;
	}
`