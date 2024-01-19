import React from 'react'
import { useState } from 'react'

function WelcomeF(props) {
    const [greeting, setGreeting] = useState('Hello');
    return (
        <h1>{greeting}, {props.name}</h1>
    )
}

export default WelcomeF