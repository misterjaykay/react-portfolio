import React, { useContext } from "react";
import CardContext from '../../utils/CardContext';

function CardBtn() {
    const {title, url} = useContext(CardContext);
  return (
    <a href={url}><button className="btn btn-primary">{title}</button></a>
  );
}

export default CardBtn;
