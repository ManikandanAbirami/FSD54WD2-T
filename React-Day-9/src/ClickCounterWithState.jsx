import React, { useState } from 'react'

function ClickCounterWithState() {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
    }

    return (
        <div>
            <h2>
                Click Counter with useState
            </h2>
            <button onClick={handleClick}>Click me</button>
            <p>Click Count: {clickCount}</p>
        </div>
    )
}

export default ClickCounterWithState