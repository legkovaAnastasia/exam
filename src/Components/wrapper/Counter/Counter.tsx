import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Counter.module.css'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type PropsType = {
    count: number
    isMax: boolean
    xType: string
    incCount: (start: number) => void
    // getError?: (error: string) => void
    error: string
    start: number
    max: number
    changeStart: (newStart: number) => void
    changeMax: (newMax: number) => void
}
export const Counter = (props: PropsType) => {

    const startHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStart(+e.currentTarget.value)
    }
    const maxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMax(+e.currentTarget.value)
    }
    let finalClassname = s.counter
        + (props.error === 'incorrect value!' ? ' ' + s.error :
            props.error === 'enter values and press "SET"' ? ' ' + ' ' :
                props.isMax ? ' ' + s.maxCount : '')
    return (
        <div>
            {props.xType === 'setting'
                ? <div className={`${s.counter} + ${s.setting}`}>
                    <div className={props.start < 0 ? `${s.error}` : ''}>start value:
                        <input type='number' onChange={(e) => startHandler(e)} value={props.start}
                        />
                    </div>
                    <div className={props.max <= props.start ? `${s.error}` : ''}>max value:
                        <input type='number' onChange={(e) => maxHandler(e)} value={props.max}/>
                    </div>
                </div>
                : <div className={finalClassname}>{props.error ? props.error : props.count}</div>
            }
        </div>
    )
};
