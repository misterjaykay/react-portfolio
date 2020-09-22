import React from 'react';

export default function Image(props) {
    const styles = {
        about: {
            width: "100%"
        }
    }
    return(
        <div>
            <img src={props.url} alt="spongebob" style={styles.about} />
            <p id="caption">Not an actual photo of myself</p>
        </div>
    )
}