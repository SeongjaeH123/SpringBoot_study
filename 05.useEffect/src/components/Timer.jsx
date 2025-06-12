import React, { useEffect } from 'react'

const Timer = () => {

    useEffect(() => {
        //1000 == 1초
        const interval = setInterval(() => {
            console.log("1초 마다 실행")
        }, 1000)

        //Unmounting(종료) 처리를 위한 return문
        return () => {
            console.log("타이머 종료");
            clearInterval(interval);
        }
    },[])

    return (
        <div>

        </div>
    )
}

export default Timer