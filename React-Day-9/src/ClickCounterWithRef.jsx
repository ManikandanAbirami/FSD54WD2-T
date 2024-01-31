import React, { useRef, useState } from 'react'

function ClickCounterWithRef() {
    const [count, setCount] = useState(0);
    const clickCountRef = useRef(0);

    const handleClick = () => {
        clickCountRef.current += 1;
        console.log(`Clicked ${clickCountRef.current} times.`);
        if (clickCountRef.current > 10) {
            setCount(clickCountRef.current);
        }
    }
    return (
        <div>
            <h2>Click Counter with useRef</h2>
            <button onClick={handleClick}>Click me</button>
            <p>Check the console for click count.</p>
            <p>New Count value: {count}</p>
        </div>
    )
}

export default ClickCounterWithRef