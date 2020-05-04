import axios from 'axios';
// import handStatusError from './handStatusError.js';
// import handResponseError from "./handResponseError.js";
const Domain = domain =>{
    if(process.env.NODE_ENV === 'development'){
        switch (location.hostname) {
            case "localhost":
                return '/';
            default:
                return domain;
        }
    }

    console.log('L14')
    return domain;
}

const weatherRequest = axios.create({
    baseURL: Domain('http://192.168.56.103:3000/'),
});

// http request 攔截器
weatherRequest.interceptors.request.use(async request => {
    // request.headers['Authorization'] = await AppFun('getUserToken');
	return request;
}, error => {
    console.log(error);
	return Promise.reject(error);
})

// http response 攔截器
weatherRequest.interceptors.response.use(response  => {
    // if(response.data.status !== "1") handResponseError(response);
    return Promise.resolve(response);
}, error => {
    console.log(error.response);
    return Promise.reject(error.response.data);
})


export const apiGetTop = () => weatherRequest.get('/search');