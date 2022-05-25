import React ,{createContext, useState}from 'react'

const GithubContext = createContext()
const GITHUB_URL =process.env.REACT_APP_GITHUB_URL
const GITHUB_API =process.env.REACT_APP_GITHUB_API


export const GithubProvider =({children})=>{
    const [users,setUsers] =useState([])
    const [loading,setLoading] =useState(true)

    const fetchUser =async () =>{
        const res = await fetch(`${GITHUB_URL}/users`,{
            headers:{
                Authorization:`token ${GITHUB_API}`
            },
        })
        const data = await res.json()
        setUsers(data)
        setLoading(false) 
    }

    return <GithubContext.Provider 
    value={{
        users,
        loading ,
        fetchUser
        }}>
    {children}
    </GithubContext.Provider>

}

export default GithubContext