import { accessTokenName, refreshTokenName} from '../configuration/constants'
import {setItem, getItem, removeItem} from './localStorage'
import jwt from 'jwt-decode'

function getAccessToken(){
    return getItem(accessTokenName)
}

function getRefreshToken(){
    return getItem(refreshTokenName)
}

function setAccessToken(value){
    return setItem(accessTokenName, value)
}

function setRefreshToken(value){
    return setItem(refreshTokenName, value)
}

function removeAccessToken(){
    return removeItem(accessTokenName)
}

function removeRefreshToken(){
    return removeItem(refreshTokenName)
}


function decodeAccessToken(){
    const accessToken = getAccessToken()
    
    if(!accessToken)
        return accessToken
    
    return jwt(accessToken)
}

export {getAccessToken, getRefreshToken, setAccessToken, setRefreshToken, removeAccessToken, removeRefreshToken, decodeAccessToken}