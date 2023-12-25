import React, { useEffect, useState } from 'react'
import "./style.css"

const UseEffect = () => {

    const [myNum, setMyNum] = useState(0);

    useEffect(() => {
        document.title = `Chats (${myNum})`
        // alert("you are the owner")
    }, []);

    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div class="button2" onClick={() => setMyNum(myNum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREMENT
                </div>
            </div>
        </>
    )
}

export default UseEffect
