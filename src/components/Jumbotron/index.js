import React from 'react';

export default function Jumbotron(props) {
    const { title } = props;
    
    const checkJumbotron = (title) => {
        switch(title) {
            case 'About Me':
                return (<><h1 className="mb-2" >{props.title}</h1>
                        <p>Little about myself.</p></>);
            case 'Portfolio':
                return (<><h1 className="mb-2" >{props.title}</h1>
                        <p>Works that I've done.</p></>);
            case 'Project':
                return (<><h1 className="mb-2" >{props.title}</h1>
                        <p>Project that I've done with people.</p></>);
            case 'Contact':
                return (<><h1 className="mb-2" >{props.title}</h1>
                        <p>Contact me Page</p></>);
            default:
                return (<h1>Non-existing Page</h1>);
        }
    }
    
    return (
        <div className={`jumbotron jumbotron${props.fluid ? "-fluid" : ""} bg-primary text-light text-center`}>
            <div className="container">
                {checkJumbotron(title)}
            </div>
        </div>
    )
}
