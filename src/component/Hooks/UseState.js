import React, { useState } from 'react'
import "./style.css"

const UseState = () => {
    const initialData = 5;
    const [curValue, setcurValue] = useState(initialData);

    return (
        <>
            <div className="center_div">
                <p>{curValue}</p>
                <div class="button2" onClick={() => curValue < 15 ? setcurValue(curValue + 1) : setcurValue(15)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div class="button2" onClick={() => curValue > 0 ? setcurValue(curValue - 1) : setcurValue(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    )
}

export default UseState