import Icon from '@/components/Icon.vue'
import getComponentRenderDom from '@/utils/getComponentRenderDom.js'
import styles from '@/styles/message.module.less'
/**
 * 
 * @param {String} content 提示内容
 * @param {*} type 提示类型 info success warn success
 * @param {*} duration 多久消失
 * @param {*} container 容器,提示框于哪个容器内显示
 */
export default function(content,type='zhuye',duration,container){
    
    let div = document.createElement("div")
    var container = container?container:document.body
    var iconHtml = getComponentRenderDom(Icon,{type}).outerHTML
      
    div.className = styles["message"]+ ' '+ styles["message-"+type]
    div.innerHTML=`<span class="${styles["iconfont"]}">${iconHtml}</span></span><span>${content}</span>`
    const containerStyle = getComputedStyle(container)
    if(containerStyle.position==='static'){
        container.style.position = "relative"
       
    }
    container.appendChild(div)
    div.offsetHeight
    div.style.transform = 'translate(-50%,-50%)'
    div.style.opacity = 1
    setTimeout(()=>{
        div.style.transform = 'translate(-50%,-50%)  translateY(-35px)'
        div.style.opacity = 0
        div.addEventListener("transitionend",function(){
            div.remove()
        },{once:true})
    },duration)
}