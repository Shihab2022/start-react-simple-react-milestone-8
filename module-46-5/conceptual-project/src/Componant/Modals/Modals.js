import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Modals = (props) => {
    // console.log(props)
    const {title,image,description}=props.product
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
       Detiles
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title.slice(0,30)}</Modal.Title>
            {/* <Modal.Title>{category}</Modal.Title> */}
            <img src={image} alt="" height="300px" width="200px"/>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default Modals;