import { useRef, useState, useEffect } from 'react'

export default function Clicker({ increment, keyName, color }) { // color = 'orange' makes default value


    const [clicks, setClicks] = useState(parseInt(localStorage.getItem(keyName) ?? 0))//deconstructor for this
    const buttonRef = useRef()

    useEffect(() => {
        //First render code could go here
        buttonRef.current.style.backgroundColor = 'grey'
        buttonRef.current.style.color = 'darkgrey' // DONT FORGET CURRENT!!


        return () => {// This will be called when the component is 'destroyed'
            localStorage.removeItem(keyName)
        }
    }, []) // The array [] will cause useEffect to be run ONLY during first render

    useEffect(() => {
        localStorage.setItem(keyName, clicks)
    }, [clicks])//Putting count in the array will make it get run when state of clicks changes 

    const buttonClick = () => {
        setClicks(value => value + 1)
        increment()
    }

    return <div>
        <div style={{ backgroundColor: color }}>{clicks} times clicked!</div>
        <button ref={buttonRef} onClick={buttonClick}>Click me!</button>
    </div>

}   