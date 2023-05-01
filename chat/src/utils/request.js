import AuthService from "../services/AuthService";
import { getAccessToken, getRefreshToken } from "./token";

export const sendPrivateRequest = async (request) => {
    const response = await request();

    if(!response.correct){
        if (response.status === 401 || response.status === 422 || response.status === 400){

            const refreshToken = getRefreshToken()
            const refreshResponse = await AuthService.refresh(refreshToken);
            if(refreshResponse.correct)
                return await request();
            else
                return response; 
        }
    }
    return response
}

export const getAuthenticationConfig = () => {
    return {
        headers: {
            Authorization: `Bearer ${getAccessToken()}`
        }
    }
}