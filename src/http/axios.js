import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = `https://www.zhengzhicheng.cn/api/public/v1/`

//拦截器发送请求前
axios.interceptors.request.use(function (config) {
    
    return config;
}, function (error) {

    return Promise.reject(error);
});

//拦截器发送请求后
axios.interceptors.response.use(function (response) {

    return response;
}, function (error) {

    return Promise.reject(error);
});


export default axios