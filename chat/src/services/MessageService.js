import API from "../configuration/api";
import { getAuthenticationConfig } from "../utils/request";

export default class MessageService {

    static async update(id, text) {
        const answer = await API.patch(`chat/api/messages/${id}/`, {content: text}, getAuthenticationConfig())
        return answer
    }

    static async delete(id){
        const answer = await API.delete(`chat/api/messages/${id}/`, getAuthenticationConfig())
        return answer
    }
}