import React from 'react'

const MapArrayExam = () => {

    let numbers = [1, 2, 3, 4, 5];


    return (
        <div>
            {numbers}
            {/* for문은 쓸 수 없지만 map함수는 기능이기에 쓸 수 있다.
                map함수는 화살표함수를 쓸 때 중괄호가 아니라 소괄호를 쓰네?
                map함수는 소괄호 안에 있는 요소를 새로운 배열로 반환한다.
                map함수는 두 개의 매개변수를 받을 수 있는데
                    첫 번째는 value로 배열에 들어있는 값을 의미한다.
                    두 번째는 index로 배열의 순서를 정의하는 그 인덱스이다. 그러므로 필요할 때만 쓰면 된다.
            */}
            {numbers.map((item, index) => (
                <div key={index}>{index}: {item}</div>
            ))}
        </div>
    )
}

export default MapArrayExam