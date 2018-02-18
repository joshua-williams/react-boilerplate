import React from 'react';

const Greeting = (props) => {
    return (
        <p>{props.message || 'Welcome'}</p>
    )
}

export default Greeting;
