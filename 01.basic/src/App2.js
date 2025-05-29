import React from 'react'
const App2 = () => {
    let name = prompt("너의 이름은?")

    // 날짜, 시간관련 정보를 가진 객체
    let today = new Date()
    console.log(today)
    console.log(today.toLocaleDateString()) //현지 시간 기준 날짜 반환
    console.log(today.getMonth()+1) //0부터 시작하기에 이번달을 보려면 1을 추가해야 한다.
    let month = today.getMonth()+1
    let todayDate = today.toLocaleDateString()
    let season = ""

    // if(month<=2 || month===12)
    //     season = "겨울"
    // else if(month<=5)
    //     season = "봄"
    // else if(month<=8)
    //     season = "여름"
    // else if(month<=11)
    //     season = "가을"

    switch(month) {
        case 12:
        case 1:
        case 2:
            season = "겨울"
            break;
        case 3:
        case 4:
        case 5:
            season = "봄"
            break;
        case 6:
        case 7:
        case 8:
            season = "여름"
            break;
        case 9:
        case 10:
        case 11:
            season = "가을"
    }

  return (
    <div>
        <h1>{todayDate}</h1>
        <hr/>
        {name}님 지금은 {season}입니다. 좋은 하루 보내세요:)
    </div>
  )
}

export default App2