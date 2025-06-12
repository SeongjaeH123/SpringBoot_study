import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './routes/page/Home.jsx'
import About from './routes/page/About.jsx'
import ProductList from './routes/page/ProductList.jsx'

function App() {
  //Routes의 역할 : 사용자가 요청한 URL중 일치하는 컴포넌트를 찾아 렌더링해주는 컴포넌트

  //Route의 역할 : path에 정의된 요청이 들어왔을 때 element에 정의된 컴포넌트를 렌더링해주는 컴포넌트
  //path는 실행할 컴포넌트의 경로(요청)
  //element는 이 주소에 맞게 렌더링할 컴포넌트를 넣어준다.
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/productList' element={<ProductList/>}/>
    </Routes>
  )
}

export default App
