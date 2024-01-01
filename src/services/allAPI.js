import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"

// API to register 

export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
    
}

//API to Login
export const LoginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
} 

// API to add projects
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}

// API to get projects
export const homeProjectAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/home-project`)
}

// API to get all projects
export const allProjectAPI = async(searchKey, reqHeader)=>{
    //Query parameter = path?key=value
    return await commonAPI("GET",`${BASE_URL}/projects/all-project?search=${searchKey}`,"",reqHeader)
}

//API to get user Projects
export const allUserProject = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-project`,"",reqHeader)
}

//API to edit user Projects
export const editProjectAPI = async(projectId,reqBody,reqHeader)=>{
    //path parameter - :id - router
    return await commonAPI("PUT",`${BASE_URL}/project/edit/${projectId}`,reqBody,reqHeader)
}

//API to delete User Projects
export const deleteProjectAPI = async(projectId,reqHeader)=>{
    //path parameter - :id - router
    return await commonAPI("DELETE",`${BASE_URL}/project/remove/${projectId}`,{},reqHeader)
}

//API to edit Profile
export const editProfileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/user/edit`,reqBody,reqHeader)
}