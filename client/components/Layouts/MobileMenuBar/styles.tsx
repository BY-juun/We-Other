import styled from "@emotion/styled";

export const MobileOverLay = styled.div`
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  cursor: pointer;
  top: 0;
  left: 0;
`;

export const MobileMenuBarWrapper = styled.div`
  z-index: 100;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  width: 0px;
  height: 100vh;
  background: white;
  position: fixed;
  top: 0;
  right: -2px;
  transition: width 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
`;

export const MenuBarHeader = styled.div`
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

export const MenuBarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
  padding: 0 15px;
  width: 100%;
  div {
    width: 100%;
    font-size: 15px;
    font-weight: 600;
  }
`;
