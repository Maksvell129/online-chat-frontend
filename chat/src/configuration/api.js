import axios from "axios"
import { httpBaseURL } from "./constants"


const api = axios.create({
    baseURL: httpBaseURL
})


api.interceptors.response.use(function (response){
    return {
        correct: true,
        status: response.status,
        data: response.data
    }
}, function(error){
    
    if(!error.response){
        alert('server is dead')
    }

    return {
        correct: false,
        status: error.response?.status,
        data: error.response?.data
    }
})

export default api