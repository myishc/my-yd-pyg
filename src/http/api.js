import Vue from 'vue'
import axios from './axios'

const api = {
    /*------------------------首页数据请求--------------------------- */
    getSwiperData() {
        return axios.get(`home/swiperdata`)
    },
    getNavMenuData() {
        return axios.get(`home/catitems`)
    },
    getFloorData(){
        return axios.get(`home/floordata`)
    },
}



Vue.prototype.$api = api