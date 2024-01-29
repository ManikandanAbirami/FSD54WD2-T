import React from 'react'
import { useParams } from 'react-router-dom'

function Room() {
    let { mani } = useParams();
    return (
        <div>
            <h1>Welcome to Room {mani}</h1>
        </div>
    )
}

export default Room