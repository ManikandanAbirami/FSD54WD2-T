import React from 'react'
import { useState } from 'react'

function ColorChange() {
    const [color, setColor] = useState('red');

    function changeColor() {
        setColor(color === 'red' ? 'blue' : 'red');
    }
    return (
        <div>
            <h1 style={{ color: color }}>This text changes color!</h1>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default ColorChange