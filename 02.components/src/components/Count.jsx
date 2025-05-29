import React from 'react'

const Count = () => {
    let count = 0;

    const handleClick = () => {
        count++
        console.log("일반 : ",count)
    }

    const [count2, setCount2] = useState(0)

    const handleClick2 = () => {
        setCount2("state : ",count2+1)
    }
    //기본적으로 state는 다 렌더링되고 갱신된다.

    return (
        <div>
            <div>
                <div>
                    <p>일반변수 : {count}</p>
                    <button onClick={handleClick}>1+</button>
                    {/* 일반 변수는 아무리 버튼을 클릭해도 화면상으로는 변하지 않는다.*/}
                </div>
            </div>
            <div>
                <div>
                    <p>state : {count2}</p>
                    <button onClick={handleClick2}>1+</button>
                    {/* 일반 변수는 아무리 버튼을 클릭해도 화면상으로는 변하지 않는다.*/}
                </div>
            </div>
        </div>
    )

}

export default Count