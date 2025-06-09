import React from 'react'

const ImgDiv = ({imgState}) => {
    return (
        <div>
            <img style={{width:450}} src={imgState} alt="" />
        </div>
    )
}

export default ImgDiv