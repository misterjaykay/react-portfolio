import React from "react";

function Card(props) {
  // const name = props.value[0].name;
  console.log(props);

  return (
    <>
      {props.value.map((res) => (
        <div className="card">
          <img
            src={res.img}
            className="card-img-top"
            alt={res.name}
          />
          <div className="card-body">
            <a href={res.url}>
              <button className="btn btn-primary">{res.name}</button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
