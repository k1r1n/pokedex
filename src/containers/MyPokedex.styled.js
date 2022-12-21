import styled from "styled-components";
import { COLORS } from "../constants";

export const ContainerStyle = styled.div`
  display: flex;
  width: 100vw;
  /* height: 100vh; */
  justify-content: center;
  background-color: #333;
  padding: 20px;

  @media screen and (min-width: 768px) {
  }
`;

export const ListStyle = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 768px) {
  }
`;
