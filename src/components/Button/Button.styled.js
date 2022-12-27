import styled from "styled-components";
import { COLORS } from "../../constants";

export const ButtonStyle = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  width: 48px;
  height: 48px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${COLORS.BOTTOM_BAR_BACKGROUND};
  box-shadow: 0 2px 3px ${COLORS.BOTTOM_BAR_SHADOW};
  color: #ffffff;
  font-size: 52px;
  font-family: monospace;
  cursor: pointer;
`;
