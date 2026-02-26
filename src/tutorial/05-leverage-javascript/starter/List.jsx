import React, { useEffect, useState } from 'react'
import { people } from '../../../data'
import Person from './Person'

const List = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        setUsers(people)
    },[])

    return (
        <section>{users.map((item)=>{
            const {id,...data} = item
            return <Person key={id} {...data}/>
        })}</section>
    )
}

export default List