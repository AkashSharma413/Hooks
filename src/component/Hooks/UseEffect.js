import React, { useEffect, useState } from 'react'
import "./style.css"

const UseEffect = () => {
    const initialData = 0;
    const [curValue, setcurValue] = useState(initialData);

    useEffect(() => {
        document.title = `Chat(${curValue})`;
    });

    return (
        <>
            <div className="center_div">
                <p>{curValue}</p>
                <div class="button2" onClick={() => setcurValue(curValue + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
            </div>
        </>
    )
}

export default UseEffect