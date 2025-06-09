import React from 'react'
import { useRef } from 'react';

const ImgChangeExam2 = () => {

    const imgPath = "./src/assets/img/"
    const keywordRef = useRef();
    const imgRef = useRef();

    const imgChange = (e) => {
        e.preventDefault();

        if(keywordRef.current.value === "강아지") {
            imgRef.current.src = `${imgPath}puppy.jpg`
        } else {
            imgRef.current.src = `${imgPath}cat.jpg`
        }

        //입력창의 내용을 초기화하고 해당 요소를 선택(focus)하는 기능
        keywordRef.current.value = "";
        keywordRef.current.focus();
    }

    return (
        <div>
            <p>희망하는 사진이 있으신가요?</p>
            <form action="">
                <input type="text" ref={keywordRef} />
                <button onClick={imgChange}>변경!</button>
            </form>
            <p>
                <img style={{width: 450}} src="" alt="" ref={imgRef}/>
            </p>
        </div>
    )
}

export default ImgChangeExam2