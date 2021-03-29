import React from 'react'

function List (props) {
    const { items, remove, toggle } = props; 
    return (
        <ul>
            { items.map((item) => (
                <li key={item.id}>
                    <span 
                        onClick={() => toggle && toggle(item)}
                        style={{textDecoration: item.complete ? 'line-through': 'none'}}
                    >
                        {item.name}
                    </span>
                    <button onClick={() => remove(item)}>X</button>
                </li>
            ))}
        </ul>
    )
}

export default List