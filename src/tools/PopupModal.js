import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../assets/Style/PopupModal.css";
Modal.setAppElement("#root");

function PopupModal(props) {
  const [openCard, setOpenCard] = useState(props.visible);

  useEffect(() => {
    setOpenCard(props.visible);
  }, [props.visible]);

  const handleCard = () => {
    setOpenCard(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <>
      <button
        className=""
        onClick={() => {
          setOpenCard(true);
        }}
      >
        click
      </button>
      <Modal isOpen={openCard} className="ReactModal__Content" overlayClassName="ReactModal__Overlay" onRequestClose={handleCard}>
        <div className="d-flex justify-content-center align-items-center">
          {props.message}
          <button className="btn btn-primary text-center" onClick={handleCard}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}

export default PopupModal;
