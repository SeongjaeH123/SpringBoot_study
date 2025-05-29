import './App.css'
import Menubox from './components/Menubox'
import MemberInfo from './components/MemberInfo'
import Count from './components/Count'

function App() {

  let styled = {
    display: "flex",
    justifyContent: "space-evenly"
  }

  return (
    <div id="root">
      {/*
      <div>
        <h1>아메리카노</h1>
        <p>3059</p>
      </div>
      <div>
        <h1>카페라떼</h1>
        <p>3345</p>
      </div>
      <div>
        <h1>콜드브루</h1>
        <p>4103</p>
      </div>
      */}
      {/*
      <Menubox menuNm={"아메리카노"} price={23445}/>
      <Menubox menuNm={"카푸치노"} price={56746}/>
      <Menubox menuNm={"카페라떼"} price={3485}/>
      */}

      {/* 실습) 야구팀 대표 투수 정보(팀명, 투수명) 출력하기,
                컴포넌트 이름 : MemberInfo */}
      
      {/*
      <MemberInfo teamNm={"KIA 타이거즈"} name={"강병우"}/>
      <MemberInfo teamNm={"SSG 랜더스"} name={"김광현"}/>
      <MemberInfo teamNm={"두산 베어스"} name={"곽빈"}/>
      <MemberInfo teamNm={"한화 이글스"} name={"류현진"}/>
      */}

      {/* state실습 */}
      <Count/>

    </div>
  )
}

export default App
