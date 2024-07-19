import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div>
        <section>
          <div className="flex flex-col justify-center items-center p-6 gap-2">
            <div className="mx-1">© Copyright 2024 -</div>
            <div className="mx-1">Developed by Mohammad Wazahat Ali Rza.</div>
            <div className="mx-1"> All right reserved.</div>
          </div>
        </section>
        <section>
          <Button variant="primary" onClick={handleShow}>
            Launch
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </section>
      </div>
    </div>
  );
};

export default Footer;
