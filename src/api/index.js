import axios from "axios";
import '../mock/getBanners.js'
 var request = axios.create()


request.interceptors.response.use(function(res){
    console.log("this is response")
    console.log(res);
    return res
})



function mm(){
    request.get('/banners').then(res=>{
        console.log("success")
        console.log(res)
    }).catch(error=>{
        console.log("error");
    })
    
}
mm()