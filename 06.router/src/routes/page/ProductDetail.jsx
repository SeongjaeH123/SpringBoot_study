import React from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {

  const {pro_no} = useParams();
  
  // useParams()
  // - 요청 url 경로에서 동적 세그먼트(/path/:key)를 가져오는 방식
  // - 상수 안에 값을 삽입하고 그 상수를 사용한다.
  // - 블로그 포스트ID, 회원ID, 상품ID등에 쓰인다.

  return (
    <div>
        <div>ProductDetail</div>
        <h4>{pro_no}번 상품입니다!</h4>
    </div>
  )
}

export default ProductDetail