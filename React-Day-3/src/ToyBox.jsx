import React from 'react'
import { useState } from 'react'

function ToyBox() {
    const [toys, setToys] = useState(['Teddy Bear', 'Race Car']); //'Puzzle', 'Cards'

    const addToy = (newToy) => {
        setToys(oldToys => [...oldToys, newToy]);
    }

    return (
        <div>
            <h2>My Toy Box</h2>
            <ul>
                {toys.map(toy => <li>{toy}</li>)}
            </ul>
            <button onClick={() => addToy('Doll')}>Add Doll</button>
        </div>
    )
}

export default ToyBox