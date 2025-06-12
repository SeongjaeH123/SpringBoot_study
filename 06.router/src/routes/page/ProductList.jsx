import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router'

const ProductList = () => {
  
  //useNavigate()
  // - Link처럼 페이지를 이동할 때 사용하는 컴포넌트
  // - Link는 분기를 구분해서 이동하기 어려웠지만 navigate는 분기를 구분할 때 좋다.
  
  const navigate = useNavigate();
  const page = useRef();

  const goToHome = (e) => {
    if(e.target.innerText=="Home")
        navigate("/")
    else
        navigate("/about")
  }

  return (
    <div>
        <h1>ProductList</h1>
        <button onClick={goToHome}>Home</button>
        <button onClick={goToHome}>About</button>
    </div>
  )
}

export default ProductList