<template>
  <ul class="nav-container">
    <li class="active">
      <a>
       <Icon type="zhuye"/>
        Duyi-Edu
      </a>
     
    </li>
     <li>
      <a>
       <Icon type="zhuye"/>
        Duyi-Edu
      </a>
     
    </li>
     <li>
      <a>
       <Icon type="zhuye"/>
        Duyi-Edu
      </a>
     
    </li>
     <li>
      <a>
       <Icon type="zhuye"/>
        Duyi-Edu
      </a>
     
    </li>
     <li>
      <a>
       <Icon type="zhuye"/>
        Duyi-Edu
      </a>
     
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
  .nav-container{
    width:100%;
    
    color:@lightWords;
    font-size:18px;
    li{
      height:40px;
      line-height: 40px;
    
      &.active{
       background: @gray;
        a{
            color:#fff;
            
         }
      }
      box-sizing: border-box;
      padding-left:40px;
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
      }
    }
    .iconfont{
      font-size:18px;
      width:25px;
      display:inline-block;
    }
  }
</style>