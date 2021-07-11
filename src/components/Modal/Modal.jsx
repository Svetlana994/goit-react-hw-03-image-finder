import PropTypes from "prop-types";
import { Overlay, ModalWindow } from "./Modal.styles";

function Modal({ onClick, picture }) {
  return (
    <Overlay onClick={onClick}>
      <ModalWindow>
        <img src={picture} alt="" />
      </ModalWindow>
    </Overlay>
  );
}

Modal.propTypes = {
  picture: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
