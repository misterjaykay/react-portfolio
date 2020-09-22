import React from 'react';
import CardBtn from '../CardBtn';
import CardTitle from '../CardTitle';
import CardImg from '../CardImg';

function Card() {
    return(
        <div className="card">
            <CardImg />
            <CardTitle />
            <CardBtn />
        </div>
    )
}

export default Card;