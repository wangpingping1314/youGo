
let baseUrl="https://autumnfish.cn/wx/"
let hxios={
  get(url){
   return new Promise((resolve,reject)=>{
      wx.request({
        url: baseUrl+url, //开发者服务器接口地址",
        method: 'GET',
        dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: res => {
         resolve(res)
        },
        // 失败的回调函数
        fail: () => {
          reject()
        },
        // 完成后的回调函数
        complete: () => {}
      });
    })
  }
}

export default hxios;
