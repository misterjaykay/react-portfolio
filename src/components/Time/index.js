import React from 'react';

export default function Time() {
    const localeDate = new Date().toLocaleDateString('en-US');
    const localeTime = new Date().toLocaleTimeString('en-US');

    return(
        <>
        <h4>{localeDate}</h4>
        <h4>{localeTime}</h4>
        </>
    )
}