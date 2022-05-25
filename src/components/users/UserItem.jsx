import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({user:{login,avatar_url}}) => {
  return (
    <div className='card shadow-md compact side bg-base-100'>
    <Link className='' to={`/users/${login}`}>
        <div className="flex-row item-center space-x-4 card-body items-center hover:bg-violet-600">
            <div>
                <div className="avater">
                    <div className="rounded-full shadow w-14 h-14">
                       <img className='rounded-full' src={avatar_url} alt="Profile" />
                    </div>
                </div>
            </div>
            <h2 className="card-title capitalize ">{login}</h2>
        </div>
     </Link>
    </div>
  )
}

export default UserItem