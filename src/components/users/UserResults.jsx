import React, { useContext, useEffect, useState } from 'react'
import GithubContext from '../../context/GithubContext'
import Spinner from '../layout/assets/Spinner'
import UserItem from './UserItem'

const UserResults = () => {


    const {users,loading,fetchUser} =useContext(GithubContext)
    useEffect(()=>{
        fetchUser()
    },[])

    if(!loading){

        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map((user)=>(
                <UserItem  key={user.id} user={user}/>  
             ))}</div>
    )
    }else{
        return <Spinner/>
    }
}

export default UserResults