import axios from 'axios'
import { VueAxios } from './axios'
const brasUrl = 'http://localhost:10004'

// 创建 axios 实例
const service = axios.create({
    baseURL: brasUrl,
    timeout: 30000
})

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(brasUrl + url, {
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err.data)
        })
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, JSON.stringify(params))
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}