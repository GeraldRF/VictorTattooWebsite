import axios from 'axios';
import { inject } from 'vue';

export default function useAxiosCall() {

    const SERVER_URL = inject('SERVER_URL');

    const getCall = (endpoint, data) => {
        return new Promise((resolve, reject) => {
            axios.get(SERVER_URL+endpoint).then(response => {
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

    const postCall = (endpoint, data) => {
        return new Promise((resolve, reject) => {
            axios.post(SERVER_URL+endpoint, data).then(response => {
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