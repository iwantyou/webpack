import React, { useState } from 'react'
let i = 0
function Rule (props){
    const { history }  = props
   let [count, setCount] =  useState(() => {console.log(i++); return 1})
    return (
        <div className="rule">
            只是rule页面 
    <p onClick={() => setCount(count++)}>{count}</p>
        </div>
    )
}
export default Rule