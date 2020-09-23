import React from "react";

function Card({ value, attr }) {
  return (
    <>
      {value.map((res) => (
        <div className={`card ${attr}`} key={res.name}>
          <img
            src={res.img}
            className="card-img-top"
            alt={res.name}
          />
          <div className="card-body">
            <h4>{res.name}</h4>
            <a href={res.url}>
              <button className="btn btn-sm btn-primary mb-1">Source Code</button>
            </a>
            <br />
            {(res.deploy) ? (<a href={res.deploy}>
              <button className="btn btn-sm btn-primary mt-1">Deployed Page</button>
            </a>) : (<div/>)}
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
