import { React, useState } from 'react'

function List(props) {
    return (
        <ul>
            {props.list?.map((item) => (
                <li key={item.movie_id}>{item.title}</li>
            ))}
        </ul>
    )
}

export default List