import React from 'react'

function List({ list, name }) {
    return (
        <div>
            <h1>Lists - {name}</h1>
            <ul>
                {list.map(function (item, index) {
                    return <li key={index}>{`${item.mentor} - ${item.title} - ${item.points}`}</li>
                })}
            </ul>
        </div>
    )
}

export default List