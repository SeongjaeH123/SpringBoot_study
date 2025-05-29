import React from 'react'

// const Menubox = (props) => {
//     console.log("App.jsx 컴포넌트에게 전달받은 값 :", props)
//     return (
//         <div>
//             <h1>{props.menuNm}</h1>
//             <p>{props.price}</p>
//         </div>
//     )
// }


//구조분해할당
// 현재 상태는 {props:{"menuNm"="key1", "price":"key2"}} 형태이다.
// 이걸 const {menuNm, price} = props; 의 형태로 바꾸게 되면 번거롭게 점을 찍어서 접근할 필요가 없다.
// 말 그대로 구조를 분해해서 각각 할당해주는것이 구조분해할당이다.
const Menubox = ({menuNm, price}) => {
    // console.log("App.jsx 컴포넌트에게 전달받은 값 :", props)
    return (
        <div>
            <h1>{menuNm}</h1>
            <p>{price}</p>
        </div>
    )
}

export default Menubox