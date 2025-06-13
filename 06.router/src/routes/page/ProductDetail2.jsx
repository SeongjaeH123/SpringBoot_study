import React from 'react'
import { useSearchParams } from 'react-router'

const ProductDetail2 = () => {
  
  const [query, setQuery] = useSearchParams()
  
  // useSearchParams()
  // - 요청 URL 경로에서 쿼리스트링(/path?key=vlaue)을 가져오는 방식
  // - state 형태로 받아서 get() 함수를 통해 출력
  // - 검색어, 정렬, 필터 등에 쓰인다.

  return (
    <div>
        <h1>ProductDetail2</h1>
        <h4>{query.get("pro_no")}번째 {query.get("cate")}상품입니다.</h4>
    </div>
  )
}

export default ProductDetail2