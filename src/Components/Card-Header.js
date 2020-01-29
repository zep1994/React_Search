import React from 'react';

const Card = ({ item }) => {
    return (
        <div>
            <a href={item.url}>{item.title}</a>
        </div>
    )
}

export default Card