import React from "react";
import styles from "./Modal.module.css";
import { Button, Modal } from "react-bootstrap";

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  name: string;
}

const ModalCard: React.FC<ModalProps> = ({ show, handleClose, children, name }) => {
  return (
    // <div className={show ? styles.modalDisplayBlock : styles.modalDisplayNone}>
    //   <section className={styles.modalMain}>
    //     {children}
    //     <button type="button" onClick={handleClose}>
    //       Close
    //     </button>
    //   </section>
    // </div>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      fullscreen={"xl-down"}
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Hello! <strong>{name}</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Next</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCard;
