import axios from 'axios';
import { inject } from 'vue';

export default function useAxiosCall() {

    axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

    //axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;

    const getCall = (endpoint, token = null) => {

        let headers = null;
        
        if(token){
            headers = {
                "Content-type": "application/json",
                "Authorization": 'Bearer ' + token
            }
        }

        return new Promise((resolve, reject) => {
            axios.get(endpoint, { headers }).then(response => {
                    if(response.status === 200){
                        resolve(response);
                    } else {
                        reject(response)
                    }
                
            }).catch(error => {
                reject(error);
            });
        });
    }

    const postCall = (endpoint, data, token = null) => {

        let headers = null;
        
        if(token){
            headers = {
                "Content-type": "application/json",
                "Authorization": 'Bearer ' + token
            }
        }

        return new Promise((resolve, reject) => {
            axios.post(endpoint, data, { headers }).then(response => {
                    if(response.status === 200){
                        resolve(response);
                    } else {
                        reject(response)
                    }              
            }).catch(error => {
                reject(error);
            });
        });
    }
    

    return {
        getCall,
        postCall,
    }

}