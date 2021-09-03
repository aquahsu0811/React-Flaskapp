import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import ImgContext from './store/image-context';

export const Flask = () => {
    const ctx = useContext(ImgContext)
    const [error, setError] = useState(null)
    // const [items, setitems] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/v1.0/test")
            .then(res => res.json()) // res == result
            .then(
                (result) => {
                    ctx.getItem(result.items);
                    console.log("result", result)
                },
                (error) => {
                    setError(
                        true,
                    )
                }
            )
    }, [])
    return (
        <div>
            {error && <div>Error: {error.message}</div>}
            <ul>
                {ctx.items && ctx.items.map(item => (
                    <li key={item.id}>
                        {item.id} {item.img}
                    </li>
                ))}
            </ul>
            {ctx.items.length === 0 && <div>Loading...</div>}
            {!error && <div className="Flask"></div>}
            <div>
                <div>
                {"Totalnumber: " + ctx.number}
                </div>
                <button onClick={() => ctx.addItem()}>+</button>
                <button onClick={() => ctx.removeItem()}>-</button>
            </div>
        </div>
    )

}