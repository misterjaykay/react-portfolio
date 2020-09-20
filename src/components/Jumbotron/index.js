import React from 'react';

export default function Jumbotron(props) {
    return (
        <div className={`jumbotron jumbotron${props.fluid ? "-fluid" : ""} bg-primary text-light text-center`}>
            <div className="container">
                <h1 className="mb-2" >Title</h1>
                <p className="mb-0">Sub Title</p>
            </div>
        </div>
    )
}
