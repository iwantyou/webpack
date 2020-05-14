import React, { useState } from "react"
import { useDebounce } from "@/hooks/index"

function Web(props) {
    const [counter, setCounter] = useState(0)
    const fn = () => {
        setCounter(counter => counter+1)
    }

    const add = useDebounce(fn, 1000)
   
    return (
        <div className='web'>
            只是web页面 {JSON.stringify(props)}
            <div>
            <p>{counter}</p>
            <button onClick={add}>按钮</button>
            </div>
            
        </div>
    )
}
export default Web
