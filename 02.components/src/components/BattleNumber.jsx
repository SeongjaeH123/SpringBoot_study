import React, { useState } from 'react'

/*
    실습) 숫자 맞추기
    1. 버튼을 눌렀을 때, 랜덤한 숫자 생성하기(1~3)
        Math.floor(Math.random()*3)+1
    2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교
        2.1 정답이면 -> "정답입니다~"
        2.2 오답이면 -> "틀렸습니다."
        * 누른 버튼의 값을 가져오는 방법 -> event.target.innerText
*/
const BattleNumber = () => {
    // const comNum = Math.floor((Math.random()*3))+1
    const [comNum, setCom] = useState(0)
    const [myNum, setNum] = useState(0)
    const [result, setResult] = useState()

    const handleClick = e => {
        let comNumber = Math.floor((Math.random()*3))+1
        let myNumber = e.target.innerText
        setCom(comNumber)
        setNum(e.target.innerText)
        console.log(myNum)
    
        setResult(comNumber==myNumber? "정답입니다~" : "틀렸습니다.")
    }

    return (
        <div>
            <span onClick={handleClick}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </span>
            

            <p>내가 입력한 숫자 : {myNum}</p>
            <p>랜덤한 숫자 : {comNum}</p>
            <p>{result}</p>
        </div>
    )
}

export default BattleNumber