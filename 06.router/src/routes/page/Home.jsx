import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        {/* Link는 리액트에서 a태그 대신 사용되는 컴포넌트이다.
        a태그는 페이지가 리다이렉트되는 형식이지만 Link는 기존에 있던 걸 불러온다는 느낌*/}
        <Link to={"/about"}>About 이동</Link><br/>
        <Link to={"/productList"}>ProductList 이동</Link>
    </div>
  )
}

export default Home