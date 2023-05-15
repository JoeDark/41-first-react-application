import { useState, useMemo } from 'react'
import Clicker from "./interactive/Clicker.jsx"
import People from './people.jsx'


export default function App({ clickersCount, children }) { // Look how children get implemented...

    const [showClicker, setShowClicker] = useState(true)
    const [count, setCount] = useState(0)

    //props are properties of a component that we can provide using attributes
    //console.log(`hsl(${Math.random()*360}deg, 100%, 70%)`) js, put in curly brackets first

    const buttonClick = () => {
        setShowClicker(!showClicker)
    }

    const increment = () => {
        setCount(count + 1)
    }




    const colors = useMemo(() => { //If values have not changed, return prior values
        const colors = [] //otherwise, if dep value changes, call func again    

        for (let i = 0; i < clickersCount; i++) {
            colors.push(`hsl(${Math.random() * 360}deg, 100%, 70%)`)
        }

        return colors
    }, [clickersCount])//Use memo usually used to cache complex calculations and prevent them from running each draw
    // use ...(spread opp) for array.map


    return <>
        {children}

        <div>Total count: {count}</div>

        <button onClick={buttonClick}>{showClicker ? 'Hide' : 'Show'} Clicker</button> {/* Dont call function "func()", provide "func" */}
        {/*THIS IS LIKE THE @IF for blazor. This will check left, then right. Then return right if true*/}
        {showClicker && <>
            {[...Array(clickersCount)].map((value, index) =>
                <Clicker key={index}
                    increment={increment}
                    keyName={`count${index}`}
                    color={colors[index]} />
            )}
        </>}
        <People />

    </>
}