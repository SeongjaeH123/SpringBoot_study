import React from 'react'

const MemberInfo = ({teamNm, name}) => {
    let divBox = {
        width: "350px",
        height: "600px",
        backgroundColor: "#daebf7",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "3px solid #7ebfed"
    }
    let deco = {
        fontSize: "3em",
        textAlign: "center"
    }
    return (
        <div style={divBox}>
            <p style={deco}>{teamNm}</p>
            <p style={deco}>{name}</p>
        </div>
    )
}

export default MemberInfo