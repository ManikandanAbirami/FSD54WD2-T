import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function MagicRoom() {
    const [toy, setToy] = useState('car');

    //This useEffect runs when you first enter the room(component mounts)
    //and when you leave the room(component unmounts)
    useEffect(() => {
        console.log('Welcome to the Magic room!');

        return () => {
            console.log('Goodbye from the magic room!');
        }
    }, []); //This empty array means it only runs at the beginning and end.

    // This useEffect runs when the 'toy' state changes
    useEffect(() => {
        console.log(`The toy is now a ${toy}.`);
    }, [toy]);
    return (
        <div>
            <h1>Welcome to my Magic Room</h1>
            <button onClick={() => setToy('doll')}>Change Toy to Doll</button>
            <button onClick={() => setToy('train')}>Change Toy to Train</button>
            <p>Current toy is a {toy}</p>
        </div>
    )
}

export default MagicRoom