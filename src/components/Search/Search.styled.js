import styled from "styled-components";

export const SearchStyle = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  > img {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 10px;
  }
`;

export const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px 0 40px;
  border: none;
  outline: none;
  background-color: #ebf3f5;
  border-radius: 4px;
`;
