import React, { useContext } from "react";
import CardContext from "../../utils/CardContext";

function CardTitle() {
    const { title } = useContext(CardContext);
  return (
    <div className="heading">
        <p>{title}</p>
    </div>
  );
}

export default CardTitle;
