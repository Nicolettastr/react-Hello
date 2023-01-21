import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function StaticExample() {
  return (
    <Modal.Dialog>
      <h2  className="intro-title">A Warm Welcome!</h2>
      <Modal.Body>
        <p className="intro-paragraph">
          First steps with React js. Using components to create a websites structure and bootstrap for the visual appealling 
        </p>
      </Modal.Body>
      <Modal.Footer className="justify-content-start">
          <Button variant="primary">
            Comming Soon!
          </Button>
        </Modal.Footer>
    </Modal.Dialog>
  );
}

export default StaticExample;
