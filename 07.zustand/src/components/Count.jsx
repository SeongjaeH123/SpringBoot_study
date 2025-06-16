import React from 'react'
import { useState } from 'react'
import CountBox from './CountBox.jsx'
import useCountStore from '../stores/useCountStore.js'

const Count = () => {

//const [count, setCount] = useState(0)
  const { count , increase, increaseBy, decrease } = useCountStore();

  const handleAddCount = () => {
    increase()
  }

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleAddCount}>count +1</button>
        <button onClick={()=>increaseBy(10)}>count +10</button>
        <button onClick={()=>decrease()}>count -1</button>
        <CountBox/>
    </div>
  )
}

export default Count