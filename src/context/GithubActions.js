import axios from "axios"

const GITHUB_URL =process.env.REACT_APP_GITHUB_URL
const GITHUB_API =process.env.REACT_APP_GITHUB_API

const github=axios.create({
    baseURL:GITHUB_URL,
    // headers:{Authorization:`token ${GITHUB_API}`}
})


//search users
export const searchUser =async (text) =>{

    const res = await github.get(`/search/users?q=${text}`)
    return res.data.items
}


//get user
export const getUserAndRepos =async(login) =>{

    const [user,repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?sort=created?per_page=10`)

    ])
    console.log(user.data,repos.data);
    return { user:user.data , repos:repos.data}
}

