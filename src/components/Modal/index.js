import { BackdropStyle, ModalStyle, ModalContent } from "./Modal.styled";

export const Modal = ({ children, onClose }) => {
  return (
    <ModalStyle>
      <BackdropStyle onClick={onClose} />
      <ModalContent>{children}</ModalContent>
    </ModalStyle>
  );
};
