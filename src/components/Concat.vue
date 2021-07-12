<template>
  <ul class="concat-container">
    <li v-for="i in 5" :key="i">
      <a>
       <Icon type="zhuye"/>
        Duyi-Edu
      </a>
      <div class="pop">
        <img src="./../assets/logo.png" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from './Icon.vue'
export default {
  components:{
    Icon,
  }
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
  .concat-container{
    width:100%;
   
  
    color:@lightWords;
    font-size:18px;
    li{
      height:40px;
      line-height: 40px;
     
      box-sizing: border-box;
      padding-left:20px;
      position: relative;
        &:hover{
         a{
            color:#fff;
         }
          .pop{
            transform:rotateY(0deg);  
          }
        }
      .pop{
        position: absolute;
        border:1px solid black;
        width:100px;height:100px;
        border-radius:8px;
        padding:5px;
        box-sizing: border-box;
        background: #fff;
        top:-100px;
        transform:rotateX(-90deg);  
        transform-origin: center bottom;
        transition: 500ms;
      
        img{
          width:100%;
          height:100%
        }
        &::before{
          content:"";
          position: absolute;
          left:50%;
          transform: translateX(-50%);
          bottom:-20px;
          z-index:100;
          width:0;
          height:0;
          box-sizing: border-box;
          border:10px solid;
          border-color:#fff transparent  transparent transparent;
        }
      }
      a{
        display: block;
        cursor: pointer;
      }
    }
    .iconfont{
      font-size:18px;
      width:25px;
      display:inline-block;
    }
  }
</style>