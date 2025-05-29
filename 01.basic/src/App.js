import './App.css';

// App.js는 App 컴포넌트 또는 React 애플리케이션 루트 컴포넌트라고 표현한다.
//  UI를 정의하는 컴포넌트로 다른 컴포넌트를 포함할 수 있다.
//  JSX 문법을 사용해서 HTML과 JS를 작성한다.
//  여기서 CSS를 import없이 정의할 수도 있다.

// JSX문법
//  JSX는 자바스크립트와 html을 결합한 기존의 JS, html과는 다른 문법이다.
//  document 객체를 사용할 필요가 없다는 장점이 있다.
//  아래 return () 안에 있는 게 바로 JSX문법
//  중괄호{} 로 값을 감싸면 html에 입력 값을 출력해준다.
//  부모 요소는 반드시 하나여야 한다. 즉 최상위에는 하나만 있어야 한다.
//  JSX문법에서 class는 className이라 써야 한다.

// JSX-CSS 정의 방법 3가지
// 1. 요소 내부에 style 속성으로 적용 가능 (인라인 방식)
// 2. style값을 변수에 선언한 다음 적용 (내부 스타일시트) //아래 쓰인 건 2번
// 3. import로 CSS파일 분리 후 적용 (외부 스타일시트)
function App() {

  let name = '홍성재'
  let styled = {
      border: '1px solid black',
      width: 400,
      textAlign: 'center',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }
  let isLogin = true;
  let temp = prompt("오늘의 온도는?")
  let result = ""

  if(temp>25) {
    result = "덥다.."
  } else if(temp>20) {
    result = "약간 덥다..."
  } else if(temp>14)
    result = "선선하다...."

  return (  
    <div style={styled}>
      {/*
        조건부 렌더링
        조건부 렌더링=JSX에서 사용하는 조건문을 의미
          1. 삼항 연산자와 생김새가 동일한 문법 존재
            조건? () : ()
          2. &&는 분기를 설정하지 않을 때 사용, 상태값과 연계
            조건 && (조건이 참일 때 렌더링)
          3. 조건이 여러 개일 경우에는 JSX 문법보다 다중if문을 사용한다.
      */}
      <div className="App">
        로그인 상태 : {isLogin && "로그인된 상태"}<br/>
        이름 : {name}<br/>
        나이 : {26}
      </div>
      <br/>
      <div className="App">
        이름 : {name} <br/>
        나이 : {26}{26>19? (
          <p>성인</p>
        ):(
          <p>미성년자</p>
        )}
        <p>오늘의 날씨는? {result}</p>
      </div>
    </div>
  );
}

export default App;
