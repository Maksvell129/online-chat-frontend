import React, { useState, useEffect } from 'react'
import AuthContext from './AuthContext'
import { getUserInformationFromAccessToken } from '../../utils/user'
import AuthService from '../../services/AuthService'
import { getAccessToken } from '../../utils/token'
import useRequest from '../../hooks/useRequest'

const AuthProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)
    const [userId, setUserId] = useState()
    const [username, setUsername] = useState("")


    const contextData = {
        isAuth,
        setIsAuth,
        userId,
        setUserId,
        username,
        setUsername
    }

    const [isLoading, checkLogin] = useRequest(async () =>{
        const token = getAccessToken()

        
        const response = await AuthService.verify(token)

        if(response.correct){
            const userData = getUserInformationFromAccessToken()
            setUsername(userData.username)
            setUserId(userData.userId)
            setIsAuth(response.correct)
        }

    })


    useEffect(() => {
        checkLogin()
    }, [])


    if(isLoading)
        return 'Loading'


    return (
      <AuthContext.Provider value={{contextData}}>
          {children}
      </AuthContext.Provider>
    )
}

export default AuthProvider