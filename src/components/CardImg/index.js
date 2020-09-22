import React, { useContext } from "react";
import CardContext from "../../utils/CardContext";

function CardImg() {
    const { img, title } = useContext(CardContext);
  return <img src={img} alt={title} className="cardImg" />;
}

export default CardImg;
