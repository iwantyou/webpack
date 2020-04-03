import React, { useState } from "react";
function Add() {
    const [num, setNum] = useState(0);
    return (
        <div>
            <span>{num}</span>
            <div
                onClick={() => {
                    setNum(num + 1);
                }}
            >
                +
            </div>
        </div>
    );
}
export default Add;
