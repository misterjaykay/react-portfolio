import React from "react";

function Card(props) {
  // const name = props.value[0].name;
  console.log(props);

  return (
    <>
      {props.value.map((res) => (
        <div class="card">
          <img
            src={res.img}
            class="card-img-top"
            alt={res.name}
          />
          <div class="card-body">
            <a href={res.url}>
              <p class="card-text">{res.name}</p>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
