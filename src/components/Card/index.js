import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
const { value, attr } = props;
  return (
    <>
      {value.map((res) => (
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
      ))}
    </>
  );
}

export default Card;
