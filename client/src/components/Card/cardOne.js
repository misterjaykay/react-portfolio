import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from '../../utils/DataContext';
import { useParams } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Portfolio from "../../pages/Portfolio";
import PortfolioModal from '../Modal/';

function CardOne(props) {
  const { attr, value } = props;
  const context = useContext(DataContext);
  const [modal, setModal] = useState(false);
  const [number, setNumber] = useState("");
  const toggle = () => setModal(!modal);
  
  return (
    <>
      {(value === "portfolio") ? (context.filter(e => e.type === "homework").map(res => (
        <div className={`card ${attr}`} key={res.id}>
          <img
            src={res.img}
            className="card-img-top"
            alt={res.name}
          />
          <div className="card-body">
            {/* <Link to={"/portfolio/" + res.id}> */}
            {/* <a href={res.url} target="_blank" rel="noopener noreferrer"> */}
            <Button onClick={() => (setNumber(res.id),toggle())} color="primary" size="sm">{res.name}
            </Button>
            {/* </a> */}
            {/* </Link> */}
            {/* <br /> */}
            {/* {(res.deploy) ? (<a href={res.deploy}>
              <button className="btn btn-sm btn-primary mt-1">Deployed Page</button>
            </a>) : (<div/>)} */}
          </div>
        </div>
      ))) : (context.filter(e => e.type === "project").map(res => (
        <div className={`card ${attr}`} key={res.id}>
          <img
            src={res.img}
            className="card-img-top"
            alt={res.name}
          />
          <div className="card-body">
            {/* <Link to={"/portfolio/" + res.id}> */}
            {/* <a href={res.url} target="_blank" rel="noopener noreferrer"> */}
            <Button onClick={() => (setNumber(res.id),toggle())} color="primary" size="sm">{res.name}
            </Button>
            {/* </a> */}
            {/* </Link> */}
            {/* <br /> */}
            {(res.deploy) ? (<a href={res.deploy}>
              <Button color="success" size="sm">Deployed Page</Button>
            </a>) : (<div/>)}
          </div>
        </div>
      ))
        
      )}
        <PortfolioModal
        toggle={toggle} 
        isOpen={modal}
        number={number}
        />  
    </>
  );
}

export default CardOne;
