import axios from "axios"



const api = axios.create({
    baseURL: `http://localhost:8000/`
})


api.interceptors.response.use(function (response){
    return {
        correct: true,
        status: response.status,
        data: response.data
    }
}, function(error){
    return {
        correct: false,
        status: error.response.status,
        data: error.response.data
    }
})

export default api