import API from "../configuration/api"
import { setAccessToken, setRefreshToken } from "../utils/token"
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

    static async register(){

    }

    static async refresh(){

    }

}