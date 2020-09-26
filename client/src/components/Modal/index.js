import React, { useContext, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DataContext from "../../utils/DataContext";

function PortfolioModal(props) {
  const {  className, isOpen, toggle, number } = props;
  const context = useContext(DataContext);

  return (
    <div>
      {context.filter(ele => ele.id === number).map(res => (
      <Modal isOpen={isOpen} toggle={toggle} className={className} key={res.id}>
        <ModalHeader toggle={toggle}>{res.name}</ModalHeader>
        <ModalBody>
          <img className="imgmodal" src={res.screen} alt={res.name}></img>
          <p>{res.desc}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" href={res.url} target="_blank" onClick={toggle}>
            Github Code
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>)
      )}
    </div>
  );
}

export default PortfolioModal;
