import axios from "axios";
import '../mock/getBanners.js'
 var request = axios.create()


request.interceptors.response.use(function(res){
    console.log("this is response")
    console.log(res);
    return res
})
// 添加响应拦截器
// request.interceptors.response.use(function (res) {
//     // 对响应数据做点什么
//     return res;
//   });


function mm(){
    request.get('/banners').then(res=>{
        console.log("success")
        console.log(res)
    }).catch(error=>{
        console.log("error");
    })
    
}
mm()