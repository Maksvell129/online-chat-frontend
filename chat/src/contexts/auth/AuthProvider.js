import React, { useState, useEffect } from 'react'
import AuthContext from './AuthContext'
import { getUserInformationFromAccessToken } from '../../utils/user'
import AuthService from '../../services/AuthService'
import useRequest from '../../hooks/useRequest'
import { sendPrivateRequest } from '../../utils/request'
import useComponentWillMount from '../../hooks/useComponentWillMount'

const AuthProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)
    const [userId, setUserId] = useState()
    const [username, setUsername] = useState()

    const authContextData = {
        isAuth,
        setIsAuth,
        userId,
        setUserId,
        username,
        setUsername
    }

    const [isLoading, checkLogin] = useRequest(async () =>{

        
        const response = await sendPrivateRequest(
           async () => AuthService.verifyAccessToken()
        )
        
        if(response.correct){
            const userData = getUserInformationFromAccessToken()
            setUsername(userData.username)
            setUserId(userData.userId)
            setIsAuth(response.correct)
        }

    })


    useComponentWillMount(() => {
        checkLogin()
    })


    if(isLoading)
        return 'Loading'


    return (
      <AuthContext.Provider value={{authContextData}}>
          {children}
      </AuthContext.Provider>
    )
}

export default AuthProvider