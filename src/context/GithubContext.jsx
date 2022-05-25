import React ,{createContext ,useReducer}from 'react'
import GithubReducer from './GithubReducer'


const GithubContext = createContext()


export const GithubProvider =({children})=>{

    const initiaState ={
        users:[],
        user:{},
        repos:[],
        loading:true
    }

    const [state,dispatch] =useReducer(GithubReducer , initiaState)


    return <GithubContext.Provider 
    value={{
        users:state.users,
        loading:state.loading,
        user:state.user,
        repos:state.repos,
        dispatch,
        }}>
    {children}
    </GithubContext.Provider>

}

export default GithubContext