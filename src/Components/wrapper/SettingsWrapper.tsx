import React, {useState} from 'react';
import {Counter} from "./Counter/Counter";
import {Button} from "../Button/Button";
import s from "./Wrapper.module.css"

export type PropsType = {
    xType: string
    count: number
    incCount: () => void
    reset: () => void
    isMax: boolean
    error: string
    // getError: (error: string) => void
    start: number
    max: number
    changeStart: (newStart:number) => void
    changeMax: (newMax:number) => void
    getSet:()=>void
}
export const Wrapper = (props: PropsType) => {
    const onChangeStartHandler =(newStart:number)=>{
        props.changeStart(newStart)
    }
    const onChangeMaxHandler = (newMax:number)=>{
        props.changeMax(newMax)
    }

    return (
        <div className={s.wrapper}>
            <Counter
                // getError={props.getError}
                     error={props.error}
                     count={props.count}
                     isMax={props.isMax}
                     xType={props.xType}
                     incCount={props.incCount}
                     max={props.max}
                     start={props.start}
                     changeStart={(newStart:number)=>onChangeStartHandler(newStart)}
                     changeMax={(newMax:number)=>onChangeMaxHandler(newMax)}
            />
            <div className={s.btnWrapper}>
                <Button
                    error={props.error} disabled={(props.max <= props.start) || (props.start < 0)} name='set' onClick={props.getSet}/>
            </div>
        </div>

    );
};

export default Wrapper;