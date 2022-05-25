import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

const Home = () => {
  return (
    <div className='text-center items-center'>
      <UserSearch/>
      <UserResults/>
    </div>
  )
}

export default Home