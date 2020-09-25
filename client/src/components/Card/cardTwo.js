import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CompleteContext from "../../utils/CompleteContext";
import IncompleteContext from "../../utils/IncompleteContext";

function CardTwo({ attr, value }) {
const incomp = useContext(IncompleteContext);
const comp = useContext(CompleteContext);
  return (
    <>
      {(value === "doneProj") ? (comp.map((res) => (
        <>
        <div className={`card ${attr}`} key={res.id}>
          <img
            src={res.img}
            className="card-img-top"
            alt={res.name}
          />
          <div className="card-body">
            {/* <Link to={"/portfolio/" + res.id}> */}
              <a href={res.url} target="_blank" rel="noopener noreferrer"><button className="btn btn-sm btn-primary mb-1">{res.name}</button></a>
            {/* </Link> */}
            <br />
            {(res.deploy) ? (<a href={res.deploy}>
              <button className="btn btn-sm btn-primary mt-1">Deployed Page</button>
            </a>) : (<div/>)}
          </div>
        </div>
        </>
      ))) : (incomp.map((res) => (
        <>
        <div className={`card ${attr}`} key={res.id}>
          <img
            src={res.img}
            className="card-img-top"
            alt={res.name}
          />
          <div className="card-body">
            <Link to={"/portfolio/" + res.id}>
              <button className="btn btn-sm btn-primary mb-1">{res.name}</button>
            </Link>
            <br />
            {(res.deploy) ? (<a href={res.deploy}>
              <button className="btn btn-sm btn-primary mt-1">Deployed Page</button>
            </a>) : (<div/>)}
          </div>
        </div>
        </>
      )))}
      
    </>
  );
}

export default CardTwo;
