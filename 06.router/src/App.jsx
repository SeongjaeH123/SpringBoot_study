import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router'
import Home from './routes/page/Home.jsx'
import About from './routes/page/About.jsx'
import ProductList from './routes/page/ProductList.jsx'
import ProductDetail from './routes/page/ProductDetail.jsx'
import ProductDetail2 from './routes/page/ProductDetail2.jsx'
import MyPage from './routes/page/MyPage.jsx'
import Login from './routes/page/Login.jsx'

function App() {

  const [authenticate, setAuthenticate] = useState(false)

  const PrivateRoute = () => {
    return authenticate===true?
              <MyPage/> : <Navigate to={"/login"} />
  }
  
  //Routes의 역할 : 사용자가 요청한 URL중 일치하는 컴포넌트를 찾아 렌더링해주는 컴포넌트

  //Route의 역할 : path에 정의된 요청이 들어왔을 때 element에 정의된 컴포넌트를 렌더링해주는 컴포넌트
  //path는 실행할 컴포넌트의 경로(요청)
  //element는 이 주소에 맞게 렌더링할 컴포넌트를 넣어준다.
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/productList' element={<ProductList/>}/>
      <Route path='/prdDetail/:pro_no' element={<ProductDetail/>}/>
      <Route path='/prdDetail2' element={<ProductDetail2/>}/>
      <Route path='/mypage' element={<PrivateRoute/>}/> {/* 위에서 만든 PrivateRoute 컴포넌트를 호출한 것 */}
      <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
    </Routes>
  )
}

export default App
