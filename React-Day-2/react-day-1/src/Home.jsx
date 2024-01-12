import React from 'react'

function Home() {
    const list = [
        {
            title: 'React',
            mentor: 'Manikandan Anbalagan',
            points: 4
        },
        {
            title: 'Node',
            mentor: 'Manikandan Anbalagan',
            points: 5
        },
        {
            title: 'MongoDB',
            mentor: 'Manikandan Anbalagan',
            points: 3
        }
    ]
    return (
        <>
            <h1>List of courses:</h1>
            <ol>
                {list.map(function (item, index) {
                    console.log(index + " For testing purpose");
                    return <li key={index}>{`${item.mentor} - ${item.title} - ${item.points}`}</li>
                })}
            </ol>
        </>
    )
}

export default Home