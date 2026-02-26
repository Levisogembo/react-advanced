import React from 'react'
import avatar from '../../../assets/default-avatar.svg'

const Person = ({ id, name, nickName = "John Doe", images }) => {
    const imgUrl = images?.[0]?.small?.url || avatar
    const nickN = nickName
    return (
        <div>
            <img style={{ width: '120px' }} src={imgUrl}></img>
            <h4>Name: {name}</h4>
            <p>nickName : {nickN}</p>
        </div>
    )
}

export default Person