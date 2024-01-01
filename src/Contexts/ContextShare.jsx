import React, { createContext, useState } from 'react'

//to create context API we use the method - createContext()

export const addProjectResponseContext = createContext()

export const editProjectResponseContext = createContext()

function ContextShare({children}) {
    //children is a pre defined props used to share data between all components
    //create data that needed to be shared
    const [addProjectResponse, setAddProjectResponse] = useState({})

    const [editProjectResponse, setEditProjectResponse] = useState({})

    const [isAuthToken, setIsAuthToken] = useState(false)

  return (
    <div>
        <addProjectResponseContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
            <editProjectResponseContext.Provider value ={{editProjectResponse, setEditProjectResponse}}>
                {children}
            </editProjectResponseContext.Provider>
        </addProjectResponseContext.Provider>
    </div>
  )
}

export default ContextShare