import styled from "styled-components";
import { COLORS } from "../constants";

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  meter {
    height: 30px;
    width: 100%;
  }

  meter::-webkit-meter-bar {
    background: none;
    background-color: ${COLORS.METER_COLOR};
    box-shadow: 0 5px 5px -5px ${COLORS.METER_SHADOW} inset;
  }

  meter::-webkit-meter-optimum-value {
    box-shadow: 0 5px 5px -5px ${COLORS.METER_SHADOW} inset;
    background-color: ${COLORS.METER_ACTIVE};
    background-size: 100% 100%;
  }

  label {
    margin: 5px;
    align-self: flex-end;
    color: #333;
  }

  .scroll {
    overflow-y: scroll;
  }
`;

export const ListStyle = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 0 20px 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
