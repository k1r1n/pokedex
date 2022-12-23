import { BackdropStyle, ModalStyle, ModalContent } from "./Modal.styled";

export const Modal = ({ id, children, onClose }) => {
  return (
    <ModalStyle data-testid={id}>
      <BackdropStyle data-testid="modal-backdrop" onClick={onClose} />
      <ModalContent>{children}</ModalContent>
    </ModalStyle>
  );
};
