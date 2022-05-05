/**
 * axios封装
 */
import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { ElLoading } from 'element-plus';

let HOST = ''; // 基础ip
let Loadings: any = null;
// console.log('process.env.NODE_ENV', process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
    // 开发环境
    case 'development':
      HOST = '/api';
      break;
    // 正式环境
    case 'production':
      HOST = 'http://118.178.240.175/api';
      break;
    default:

}
axios.defaults.baseURL = HOST;
axios.defaults.timeout = 60 * 1000;

// 请求拦截
axios.interceptors.request.use(
    config => {
      return config;
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截
axios.interceptors.response.use(
    response => {
        if (Loadings) Loadings.close();
        return response
    },
    error => {
      if (Loadings) Loadings.close();
      return Promise.reject(error)
    }
)

// GET请求
export function methodGet(url: string, params?: object, loading:boolean = true):any {
    return new Promise((resolve, reject) => {
      if (loading === true) {
        Loadings = ElLoading.service({
          text: '请求中，请稍候...',
          background: 'rgba(255, 255, 255, 0.4)',
        });
      }
      axios
        .get(url, {
          params,
        })
        .then((response) => {
          if (response && response.data) resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
// POST请求
export function methodPost(url: string, params: object, loading:boolean = true):any {
  return new Promise((resolve, reject) => {
    if (loading === true) {
      Loadings = ElLoading.service({
        text: '请求中，请稍候...',
        background: 'rgba(255, 255, 255, 0.4)',
      });
    }
    axios
      .post(url, params)
      .then((response) => {
        if (response && response.data) resolve(response.data);
      })
      .catch((error) => {
        console.log(error)
        reject(error);
      });
  });
}