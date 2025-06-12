import React, { useEffect, useState } from 'react'
import Timer from './Timer';

const Count = () => {

    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);

    const [showTimer, setShowTimer] = useState(true);

    const handleClick = () => {
        //console.log("click")
        setValue(value+1)
    }

    const handleClick2 = () => {
        setValue2(value2+2)
    }

    //useEffect()의 구조 : 첫 번째 인자는 함수, 두 번째 인자는 배열을 넣는다.
    //첫 번째 인자는 초기화 할 때 실행되는 함수를 정의한 것
    useEffect(()=>{
        console.log("Mount!!")
    },[])

    //앱 실행 중 state가 변경 됐을 때 (Updating)
    //[]안에 들어있는 state변수에 변화가 생기면 그 변화를 감지해서 첫 번째 인자로 받은 함수 실행
    // state가 첫 번째 설정됐을 때도 변화가 생긴것으로 감지하고 실행된다.
    useEffect(()=>{
        console.log("Update...")
    },[value])
    useEffect(()=>{
        console.log("Update 2....")
    },[value2])
    //배열 형태로 넣으면 둘 중 하나의 상태만 변해도 함수 실행
    useEffect(()=>{
        console.log("Update 1 and 2.....")
    },[value, value2])

    return (
        <div>
            <h1>useEffect() 실습</h1>
            <p>{value}</p>
            <p>{value2}</p>

            <button onClick={handleClick}>값 증가</button>
            <button onClick={handleClick2}>값2 증가</button>
            <hr /> 
            <button onClick={() => {setShowTimer(!showTimer)}}>타이머 보이기</button><br/>
            {showTimer && <Timer/>}
        </div>
    )
}

export default Count