import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/wrapper/Counter/Counter";
import {Button} from "./Components/Button/Button";
import CounterWrapper from "./Components/wrapper/CounterWrapper";
import SettingsWrapper from "./Components/wrapper/SettingsWrapper";

function App() {
    let [count, setCount] = useState(0)
    const [error, setError] = useState<string>(' ')

    const [start, setStart] = useState(0)
    const [max, setMax] = useState(1)
    useEffect(() => {
        if ((max <= start) || (start < 0)) {
            setError('incorrect value!')
        } else {
            setError('enter values and press "SET"')
        }
    }, [start, max])
    const changeStart = (newStart: number) => {
        setStart(newStart)
    }
    const changeMax = (newMax: number) => {
        setMax(newMax)
    }
    const incCount = () => {
        // if(error.length>0) {
        //     setCount(count = count + 1)
        // }

        setCount(count = count + 1)

    }
    const getSet = () => {
        setCount(start)
        setError('')
    }
// let [isMax, setIsMax]=useState(false)
    let isMax = count    === max

    const reset = () => {
        setCount(0)
        setError('enter values and press "SET"')
        setMax(1)
    }

    return (
        <div className="App">
            <SettingsWrapper
                xType={'setting'}
                count={count}
                incCount={incCount}
                reset={reset}
                isMax={isMax}
                error={error}
                max={max}
                start={start}
                changeStart={changeStart}
                changeMax={changeMax}
                getSet={getSet}
            />
            <CounterWrapper
                xType={'counter'}
                count={count}
                incCount={incCount}
                reset={reset}
                isMax={isMax}
                error={error}
                max={max}
                start={start}
                changeStart={changeStart}
                changeMax={changeMax}/>

        </div>
    );
}

export default App;
