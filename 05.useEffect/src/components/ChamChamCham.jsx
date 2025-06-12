import React, { useEffect, useState } from 'react'

const ChamChamCham = () => {

    const [user, setUser] = useState("");
    const [com, setCom] = useState("");
    const [result, setResult] = useState("");
    const select = ['좌', '정면', '우'];

    const clickHandler = (e) => {
        let rd = Math.floor(Math.random()*3)
        let userSelect = e.target.innerText
        let comSelect = select[rd]
        setUser(userSelect)
        setCom(comSelect)
    }

    const handleReset = () => {
        setUser("")
        setCom("")
        setResult("")
    }

    useEffect(() => {
        //console.log(`user: ${user}, com: ${com}`)
        if(user===""||com==="") return;
        user===com?
            setResult("승리")
        :
            setResult("패배")
    },[user, com])

    /*
    실습) 참참참 게임
    1. 사용자는 공격, 컴퓨터는 수비 역할
    2. '좌', '정면', '우' 중 하나를 클릭했을 때, 사용자와 컴퓨터의 선택을 비교
        - 같은 선택일 경우: 사용자가 승리!
        - 다른 선택일 겨우 : 컴퓨터의 승리...
    4. 승리에 대한 결과를 화면에 출력
    hint1. '좌, 정면, 우'는 배열로
    hint2. state는 사용자, 컴퓨터, 승부결과
    */

    return (
        <div>
            <h1>참참참 게임</h1>
            <p>사용자 선택 : {user}</p>
            <p>컴퓨터 선택 : {com}</p>
            {result && <p>게임 결과 : {result}</p>}
            {/* && 연산자는 공백을 false로 인식하기에 boolean타입이 아니어도 작동한다. */}
            
            <div>
                <button onClick={clickHandler}>좌</button>
                <button onClick={clickHandler}>정면</button>
                <button onClick={clickHandler}>우</button><br/>
                <button onClick={handleReset}>리셋</button>
            </div>
        </div>
    )
}

export default ChamChamCham