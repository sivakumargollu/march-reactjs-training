'use client'


import {ChangeEvent, useState, useRef, useEffect} from "react"
// <counter count=${5} />



type CounterProps = {
    counter:number
}

export default function Counter(props:CounterProps){
    const [count,setCount] = useState(props.counter)
    const inputRef = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
        console.log("Count updated")
    },[count])
    function inc() {
        console.log("Incrementing counter" + count)
        //setCount(count+1)
        setCount((prevCount) => prevCount + 1)  

    }
    function handleChage(evt:ChangeEvent<HTMLInputElement>) {
            setCount(evt.target.valueAsNumber)
    }
    return (
        <div>
            <h4>Count : ${count}</h4>
            <button onClick={inc}>++</button> &nbsp;
            <button onClick={() => setCount(count-1)}>--</button>
             <div>
                <input type="number" value={count} onChange={handleChage}/>
            </div>
            <div>
                <input ref={inputRef} type="number"  placeholder="Enter value"/>
                <button onClick={() => setCount(inputRef.current?.valueAsNumber || 0)}>Update count</button>
            </div>
        </div>
       
    )
}