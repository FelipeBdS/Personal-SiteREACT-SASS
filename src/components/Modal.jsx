import PropTypes from 'prop-types';


import '../styles/components/modal.sass';

const Modal = ({ isOpen, setModalOpen, imgPath }) => {
  if (!isOpen) {
    return null; 
  }

  return (
    <div className="background_style">
      <div className="modal-style">
      <span className="span" onClick={setModalOpen}>
        &times;
      </span>
      {imgPath ? (
          <img src={imgPath} alt="" />
        ) : (
          <p>Ainda não há certificado para essa tecnologia.</p>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  imgPath: PropTypes.string,
  setModalOpen: PropTypes.func,
};

export default Modal;
