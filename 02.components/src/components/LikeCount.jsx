import React, { useState } from 'react'

const LikeCount = () => {
    let styled = {
        width: 180
    }

    const [likeNum, setNum] = useState(0)
    const [emoji, setEmoji] = useState("🤍")

    const handleClick = () => {
        if(emoji==="🤍") {
            setEmoji("🧡")
            setNum(likeNum+1)
        } else {
            setEmoji("🤍")
            likeNum>0? 
            setNum(likeNum-1) : setNum(0)
        }
            
    }

    return (
        <div>
            <img style={styled} src={"./src/assets/img/avocado.gif"} alt={"avocado"} />
            <p><span onClick={handleClick}>{emoji}</span> 좋아요 {likeNum}개</p>
        </div>
    )
}

export default LikeCount