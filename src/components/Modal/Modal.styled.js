import styled from "styled-components";
import { COLORS } from "../../constants";

export const BackdropStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${COLORS.MODAL_BACKDROP};
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: absolute;
  z-index: 2;
  width: 90%;
  margin: 0 auto;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.MODAL_CONTENT};
  box-shadow: 0 2px 3px ${COLORS.MODAL_SHADOW};
  padding: 20px;
  border-radius: 6px;
`;
