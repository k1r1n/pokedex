import styled from "styled-components";
import { COLORS } from "../constants";
import { colorType } from "../util";

export const ContainerStyle = styled.div`
  display: flex;
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
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
`;

export const ListStyle = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CardStyle = styled.div`
  display: flex;
  position: relative;
  height: 180px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  background-color: ${COLORS.CARD_BACKGROUND};
  background: url(${({ card }) => card}) -15px -40px;
  background-size: cover;
  background-size: 130%;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 3px 3px ${COLORS.CARD_SHADOW};

  > img {
    position: absolute;
    right: 10px;
    top: 5px;
    width: 120px;
    object-fit: cover;
  }

  > .blur {
    position: relative;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    height: 100vh;
    width: 100%;
  }

  > .title {
    position: absolute;
    top: 5px;
    left: 10px;
    color: ${({ type }) => colorType(type)};
    font-size: 24px;
    font-family: Gaegu;
    text-shadow: 1px 1px 0 #000000;
  }

  > .detail {
    position: absolute;
    left: 10px;
    top: 35px;
    width: calc(100% - 170px);
    height: 113px;
    border: 1px solid #fff;
    border-radius: 2px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Atma;
    font-size: 18px;

    > .state {
      flex: 0.3;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > img {
        width: 24px;
        height: 24px;
      }
    }
    > .meter {
      flex: 1;
      display: flex;
      margin-top: -5px;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
