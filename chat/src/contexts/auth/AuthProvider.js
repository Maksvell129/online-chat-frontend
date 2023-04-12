import React, { useEffect } from 'react'
import AuthContext from './AuthContext'
import { getUserInformationFromAccessToken } from '../../utils/user'

const AuthProvider = ({children}) => {


    useEffect(() => {
        getUserInformationFromAccessToken()
    }, [])


    const contextData = {
        isAuth: false,
        user_id: 0,
        username: ""
    }
  
    return (
      <AuthContext.Provider value={contextData}>
          {children}
      </AuthContext.Provider>
    )
}

export default AuthProvider