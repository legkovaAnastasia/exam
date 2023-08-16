import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/wrapper/Counter/Counter";
import {Button} from "./Components/Button/Button";
import CounterWrapper from "./Components/wrapper/CounterWrapper";
import SettingsWrapper from "./Components/wrapper/SettingsWrapper";

function App() {
    let [count, setCount] = useState(0)
    const [error, setError] = useState<string>('')

    const [start, setStart] = useState(0)
    const [max, setMax] = useState(1)
    useEffect(() => {
        if ((max <= start) || (start < 0)) {
            setError('incorrect value!')
        }
        else {
            setError('enter values and press "SET"')
        }
    }, [start, max])

    useEffect(() => {
        getFromLS()
    }, [])

    useEffect(() => {
        getToLS()
    }, [start, error, max, count])
    const changeStart = (newStart: number) => {
        setStart(newStart)
    }
    const changeMax = (newMax: number) => {
        setMax(newMax)
    }
    const incCount = () => {
        setCount(count = count + 1)
    }
    const getSet = () => {
        setCount(start)
        setError('')
    }
    const getToLS = () => {
        localStorage.setItem('startValue', JSON.stringify(start))
        localStorage.setItem('errorValue', JSON.stringify(error))
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('countValue', JSON.stringify(count))
    }
    const getFromLS=()=>{
        let startAsString = localStorage.getItem('startValue')
        let errorAsString = localStorage.getItem('errorValue')
        let maxAsString = localStorage.getItem('maxValue')
        let countAsString = localStorage.getItem('countValue')
        if(startAsString)setStart(JSON.parse(startAsString))
        if(errorAsString)setError(JSON.parse(errorAsString))
        if(maxAsString)setMax(JSON.parse(maxAsString))
        if(countAsString)setCount(JSON.parse(countAsString))
    }
    const reset = () => {
        localStorage.clear()
        setStart(0)
        setMax(1)
        setError('enter values and press "SET"')
    }
    let isMax = count === max

    // const reset = () => {  без localStorage
    //     setCount(0)
    //     setError('enter values and press "SET"')
    //     setMax(1)
    // }

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
