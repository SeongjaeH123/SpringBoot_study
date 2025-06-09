import React from 'react'
import { useRef } from 'react';

const LoginForm = () => {

    //일단 '문자열 형태'로 비우고 초기화
    const userId = useRef("")
    const userPw = useRef("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`id : ${userId.current.value}`);
        console.log(`pw : ${userPw.current.value}`);
        let id = userId.current.value;
        let pw = userPw.current.value;
        
        if(!id || !pw) {
            alert("값을 모두 입력해주세요.")
            return;
        }
        if(pw.length < 6) {
            alert("비밀번호는 6자리 이상입니다.")
            return;
        }
    }

    return (
        <div>
            <h1>로그인 폼</h1>
            <form action="#">
                <p><input type="text" ref={userId}/></p>
                <p><input type="password" ref={userPw}/></p>
                <p><input type="submit" value="로그인" onClick={handleSubmit}/></p>
            </form>
        </div>
    )
}

export default LoginForm