import { decodeAccessToken } from "./token";


function getUserInformationFromAccessToken(){
    const data = decodeAccessToken()
    
    if(!data)
        return null

    return {
        userId: data.user_id,
        username: data.username
    }

}

export {getUserInformationFromAccessToken}