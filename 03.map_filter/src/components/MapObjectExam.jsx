import React from 'react'

const MapObjectExam = () => {

    let members = [
        {id:1, name:'박수현', age:25, gender:'F'},
        {id:2, name:'류이수', age:30, gender:'M'},
        {id:3, name:'임명진', age:35, gender:'M'}
    ]

    let result = members.map((member) => {
        return (
            <div key={member.id}>{member.id}. {member.name} - {member.age}({member.gender === 'M'?'남':'여'})</div>
        )
    })

    return (
        <div>
            {/* 
                객체는 일반적인 배열처럼 value하나만 선언하면 접근할 수 없다.
                점(.) 을 이용해서 객체의 내부에 접근해야 한다.
             */}
            {members.map((member) => (
                <div key={member.id}>{member.id}. {member.name} - {member.age}({member.gender === 'M'?'남':'여'})</div>
            ))}
            <hr/>
            {result}
        </div>
    )
}

export default MapObjectExam