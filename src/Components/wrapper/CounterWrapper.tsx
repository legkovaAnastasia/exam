import React from 'react';
import {Counter} from "./Counter/Counter";
import {Button} from "../Button/Button";
import s from "./Wrapper.module.css"

export type PropsType = {
    xType:string
    count: number
    incCount: () => void
    reset: () => void
    isMax: boolean
    error:string
    start:number
    max:number
    changeStart:(newStart:number)=>void
    changeMax:(newMax:number)=>void
}
export const Wrapper = (props: PropsType) => {

    return (
        <div className={s.wrapper}>
            <Counter  count={props.count} isMax={props.isMax} xType={props.xType} incCount={props.incCount} error={props.error}
                      max={props.max}
                      start={props.start}
                      changeMax={props.changeMax}
                      changeStart={props.changeStart}
            />
            <div className={s.btnWrapper}>
                <Button disabled={props.isMax} name='inc' onClick={props.incCount}/>
                <Button name='reset' onClick={props.reset} count={props.count}/>
            </div>
        </div>

    );
};

export default Wrapper;