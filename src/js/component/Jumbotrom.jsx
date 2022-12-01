import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function StaticExample() {
  return (
    <Modal.Dialog>
      <h2  className="intro-title">A Warm Welcome!</h2>
      <Modal.Body>
        <p className="intro-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </Modal.Body>
      <Modal.Footer className="justify-content-start">
          <Button variant="primary">
            Call to action!
          </Button>
        </Modal.Footer>
    </Modal.Dialog>
  );
}

export default StaticExample;
