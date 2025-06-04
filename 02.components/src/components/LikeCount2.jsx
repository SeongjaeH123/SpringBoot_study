import React, { useState } from 'react'


const LikeCount2 = () => {
    const [likeNum, setNum] = useState(0)

    const handleClickUp = () => {
        setNum(likeNum+1)
    }
    const handleClickDown = () => {
        if(likeNum>0)
            setNum(likeNum-1)
    }
    return (
        <div id='content'>
            <table>
                <tbody>
                    <tr>
                        <td colspan={2}>
                            <img src="./src/assets/img/avocado.gif" alt="아보카도" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <p>좋아요 {likeNum}개</p>
                        </td>
                    </tr>
                    <tr>
                        <td><button onClick={handleClickUp}>🧡</button></td>
                        <td><button onClick={handleClickDown}>💔</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LikeCount2