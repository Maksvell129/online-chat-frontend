import API from "../configuration/api"
import { getAccessToken, setAccessToken, setRefreshToken } from "../utils/token"
import { accessTokenName, refreshTokenName } from "../configuration/constants"

export default class AuthService {

    static async login(username, password){
        const answer = await API.post('/accounts/api/token/', {username, password})
        
        if(answer.correct)
        {
            setAccessToken(answer.data[accessTokenName])
            setRefreshToken(answer.data[refreshTokenName])
            delete answer.data
        }

        return answer
    }

    static async register(username, password, email){
        const answer = await API.post('/accounts/api/register/', {username, password, email})
        
        if(answer.correct)
        {
            setAccessToken(answer.data[accessTokenName])
            setRefreshToken(answer.data[refreshTokenName])
            delete answer.data
        }
        
        return answer
    }

    static async refresh(refreshToken){
        const answer = await API.post('/accounts/api/token/refresh/', {
            refresh: refreshToken            
        })

        if(answer.correct)
        {
            setAccessToken(answer.data[accessTokenName])
            setRefreshToken(answer.data[refreshTokenName])
            delete answer.data
        }

        return answer
    }

    static async verify(token){
        const answer = await API.post('/accounts/api/verify/', {token})
        return answer
    }

    static async verifyAccessToken(){
        const accessToken = getAccessToken()
        return await this.verify(accessToken)
    }

}