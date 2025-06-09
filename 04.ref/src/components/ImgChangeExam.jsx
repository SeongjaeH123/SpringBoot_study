import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import ImgDiv from './ImgDiv';

const ImgChangeExam = () => {

    const imgPath = "./src/assets/img/"
    const file = useRef("");
    const [imgState, setImgState] = useState("");

    const imgChange = () => {
        let fileName = file.current.value;
        setImgState(`${imgPath}${fileName}.jpg`);
    }

    return (
        <div>
            <p>희망하는 사진이 있으신가요?</p>
            <input type="text" ref={file} /><button onClick={imgChange}>변경!</button>
            <ImgDiv imgState={imgState}/>
        </div>
    )
}

export default ImgChangeExam