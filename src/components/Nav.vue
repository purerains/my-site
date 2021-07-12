<template>
  <ul class="nav-container">
    <li class="active" v-for="item in menu" :key="item.src">
      <router-link :to="item.src" exact>
       <Icon :type="item.icon"/>
        {{item.text}}
      </router-link>
     
    </li>
  </ul>
</template>

<script>
import Icon from './Icon.vue'
export default {
  components:{
    Icon,
  },
  data(){
    return {
      menu:[
        {
          icon:"zhuye",
          text:"首页",
          src:"/"
        },
        {
          icon:"notification",
          text:"我的blog",
          src:"/blog"
        },
        {
          icon:"setting",
          text:"设置",
          src:"/setting"
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
  .nav-container{
    width:100%;
    
    color:@lightWords;
    font-size:18px;
    li{
      height:40px;
      line-height: 40px;
      box-sizing: border-box;
    
      position: relative;
        &:hover{
           background: @gray;
         a{
            color:#fff;
            
         }
         
        }  
      a{
        display: block;
        cursor: pointer;
        padding-left:40px;
        &.router-link-active{
        background: @gray;
        color:#fff;
        
        }
      }
    }
    .iconfont{
      font-size:18px;
      width:25px;
      display:inline-block;
    }
  }
</style>