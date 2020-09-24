import React from 'react'

export default function index(props) {
    return <div className={`container ${props.class}`} style={props.style}>{props.children}</div>;
}
