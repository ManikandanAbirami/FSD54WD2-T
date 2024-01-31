import React, { useEffect, useRef } from 'react'

function AutoFocusInput() {
    //Create a ref object
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        console.log("Dom reference:", inputRef.current);
    }, [])// Empty dependancy array means this effect runs once after the initial render 
    return (
        <div>
            <h2>Auto-Focus Input using useRef</h2>
            <input type="text" ref={inputRef} placeholder='Focus on me!' />
        </div>
    )
}

export default AutoFocusInput