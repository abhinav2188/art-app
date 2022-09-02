import axios from "axios";
import { localStorage } from "./localStorage";

let instance = axios.create({
    baseURL: "http://art-dts.herokuapp.com/api" 
});

instance.interceptors.request.use(
    async (req) => {
        const user = await localStorage.getData("userDetails");
        if(!!user && !!user.token){
            let authToken = "Bearer " + user.token;
            console.log("authToken:", authToken);
            req.headers.Authorization = authToken;
        }
        req.headers['Access-Control-Allow-Origin'] = '*';
        console.log("requesting: ",req.url);
        console.log("request params: ",req.params);
        console.log("request headers:", req.headers);
        console.log("request body: ",req.data);
        return req;
    },
    error => {
        Promise.reject(error);
    }
);

instance.interceptors.response.use((response) => {
    console.log("interceptor: " + response);
    return response;
}, error => {
    console.log(error);
    console.log("interceptor error: " + error.code);
    return Promise.reject(error);
});

export default instance;
