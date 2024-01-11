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
                {list.map(function (item) {
                    return <li>{`${item.mentor} - ${item.title} - ${item.points}`}</li>
                })}
            </ol>
            {/* <ol>
                <li>{list[0].title}</li>
                <li>{list[1].title}</li>
                <li>{list[2].title}</li>
            </ol> */}
        </>
    )
}

export default Home