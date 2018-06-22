
import axios from 'axios';

/**
 * 封装的全局ajax请求
 */

class Axios{
  constructor (){
    this.init();
  };

  /**
   * 初始化
   */
  init(){
   /* axios.defaults.withCredentials = true;*/
    axios.defaults.baseURL = "http://192.168.0.151:9999";
  };
  url(){
    return axios.defaults.baseURL;
  }
  /**
   * 判断是否是登录
   * @param url
   * @returns {boolean}
   * @private
   */
/*  _isLogin(url){

    if(url != '/app/login'){
      return false;
    }else{
      return true;
    }
  }*/

  /**
   * 判断是否返回数据
   * @param data 接收到的数据
   * @returns {boolean}
   * @private
   */
  _isStatus(data){
    if(data.state===0||data.status===0){
      return false;
    }else if (data.state===1||data.state===10||data.status==1||data.status==10){
      return true;
    }

  }

  /**
   * 全局错误处理
   * @param data 传入错误的数据
   * @private
   */

  _error(data){
    if(data.response!=null){
      if(data.response.status==504) {
        console.log(data);
      }
    }else{
      console.log(data);
    }
  }


  /**
   * GET 请求 {es6解构赋值}
   * @param type 包含url信息
   * @param data 需要发送的参数
   * @returns {Promise}
   * @constructor
   */
  HttpGet({url},data) {
    // 创建一个promise对象
   /* this._isLogin(url);*/
    this.promise = new Promise((resolve, reject)=> {
      axios.get(url,{params:data})
        .then((data) => {
          if(this._isStatus(data.data)){
            resolve(data.data);
          }else{
            /*alert(data.data.reason);*/
            reject(data.data);
          }
        },function (reason) {
          if(reason.status==401){
           alert('超时');
          }else{
            reject(reason.data);
          }
        });


        /*)
        .catch((data) =>{
          reject(data.data);
        })*/
    })
    return this.promise;
  };

  /**
   * POST 请求
   * @param type Object 包含url信息
   * @param data Object 需要发送的参数
   * @param urlData Object 需要拼接到地址栏的参数
   * @returns {Promise}
   * @constructor
   */
  HttpPost({url},Data,urlData){

    // 判断是否加头部
  /*  this._isLogin(url);*/
    // 创建一个promise对象
    this.promise = new Promise((resolve, reject)=> {
      for(const item in urlData){
        url += '/' + urlData[item];
      };
      axios.post(url,Data)
        .then((data) => {

          // 是否请求成功
          if(this._isStatus(data.data)){
            resolve(data.data)
          }else{
            /*alert(data.data.reason);*/
            reject(data.data);
          };
        },function (reason) {
          if(reason.status==401){
            alert('超时');
          }else{
            reject(reason.data);
          }
        });

       /* )
        .catch((data) =>{
          reject(data.data);
        })*/
    })
    return this.promise;
  };
};
export default new Axios();
