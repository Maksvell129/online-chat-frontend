import { decodeAccessToken } from "./token";


function getUserInformationFromAccessToken(){
    const data = decodeAccessToken()
    
    if(!data)
        return null

    return {
        user_id: data.user_id,
        username: data.username
    }

}

export {getUserInformationFromAccessToken}