import AuthService from "../services/AuthService";
import { getRefreshToken } from "./token";

export const sendPrivateRequest = async (request) => {
    
    const response = await request();
    if(!response.correct){
        if (response.status === 401 || response.status === 422){

            const refreshToken = getRefreshToken()
            const isCorrect = await AuthService.refresh(refreshToken);
            if(isCorrect)
                return await request();
            else
                return response; 
        }
    }
    return response
}