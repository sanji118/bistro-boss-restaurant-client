import { axiosInstance } from "../hook/axiosInstance"

export const getMenu = async () =>{
    try{
        const response = await axiosInstance.get('/menu');
        return response.data;
    }catch(error){
        console.log('API error: ', error);
    }
}