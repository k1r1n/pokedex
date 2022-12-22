import styled from "styled-components";
import { COLORS } from "../../constants";
import { colorType } from "../../util";

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

  &:hover,
  &:active {
    filter: brightness(0.5);
  }

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
    left: 10px;
    color: ${({ type }) => colorType(type)};
    font-size: 24px;
    font-family: Atma;
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
    font-family: Gaegu;
    font-size: 20px;
    color: #fff;

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
