import { ButtonStyle } from "./Button.styled";

export const Button = ({ id, onClick }) => (
  <ButtonStyle data-testid={id} onClick={onClick}>
    +
  </ButtonStyle>
);
