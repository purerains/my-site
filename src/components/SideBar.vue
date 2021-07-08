<template>
  <div class="side-bar-container">
    <Avatar :size="150" url="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"/>
    <h1 class="title">汪亮的博客</h1>
    <Nav/>
    <Concat/>
  </div>
</template>

<script>
import Avatar from './Avatar.vue'
import Nav from './Nav.vue'
import Concat from './Concat.vue'
export default {
  components: {
    Avatar,
     Nav,
     Concat
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
  .side-bar-container{
    width:240px;
    height:100%;
    box-sizing: border-box;
    padding:15px 0;
    background: @dark;
    overflow-y:auto;
    .avatar-container{
      margin:0 auto
    }
    .title{
      text-align: center;
      font-size: 24px;
      line-height: 50px;
      color:#fff
    }
    .concat-container{
      margin-top:30px
    }
  }
</style>