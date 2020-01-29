import React, {useState, useEffect} from 'react';

function PullData() {

    useEffect(() => {
        fetchItems()
    },[])

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(data)
    }

    return (
        <div>
            <h1>Main</h1>
        </div>
    )
}

export default PullData