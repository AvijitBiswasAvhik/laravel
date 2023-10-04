import React from "react";

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});

axiosClient.interceptors.request.use((config) =>{
    return config;
});

axiosClient.interceptors.response.use(
    (response) =>{
        return response;
    },
    (error) =>{
        if(error.response && error.response.staus === 401){
            return error;
        }
        throw error;
    }
    
);
export default axiosClient;