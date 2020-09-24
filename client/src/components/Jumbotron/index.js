import React from 'react';

export default function Jumbotron(props) {
    const { title } = props;
    
    const checkJumbotron = (title) => {
        switch(title) {
            case 'About Me':
                return (<><h1 className="mb-2" >{props.title}</h1>
                        <p>A full stack Developer, covering from Front-end to Back-end.</p></>);
            case 'Portfolio':
                return (<><h1 className="mb-2" >{props.title}</h1>
                        <p>From little lines of code to complicated ones.</p></>);
            case 'Project':
                return (<><h1 className="mb-2" >{props.title}</h1>
                        <p>Awesome Challenges that I've done with the fellow mates.</p></>);
            case 'Contact':
                return (<><h1 className="mb-2" >{props.title}</h1>
                        <p>Avenues to get in contact with me.</p></>);
            case 'Resume':
                return (<><h1 className="mb-2" >{props.title}</h1>
                        <p>Where you can check out my experiences</p></>);
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
