<template>
  <div id="app">
    <!-- <SideBar/> -->
    <Layout>
      <template v-slot:left>
        <SideBar/>
      </template>

      <template v-slot:main>

        <router-view />
        <button @click="handleClick">click</button>
        <div class="message-box"  ref="message">
         
        </div>
      </template>
    </Layout> 
  </div>
</template>

<script>

import SideBar from './components/SideBar.vue'
import Icon from './components/Icon.vue'
import Pagenation from './components/Pagenation.vue'
import Concat from './components/Concat.vue'
import Nav from './components/Nav.vue'
import Layout from './components/Layout.vue'
import getComponentRenderDom from '@/utils/getComponentRenderDom.js'
import message from '@/utils/showMessage.js'
export default {
  name: 'App',
  components: {
   Layout,
    Icon,
    Pagenation,
    Concat,
    Nav,
    SideBar
  },
  data(){
    return {
      current:1
    }
  },
  created(){
   
   
    //getComponentRenderDom(Icon,{type:"zhuye"})
  },
  mounted(){
    console.log(this.$refs.message)
    
  },
  methods:{
    handleClick(){
      message("验证通过！","success" ,2000,this.$refs.message)
    }
  }
}
</script>

<style lang="less" scoped>
#app{
  width:100vw;
  height:100vh;
}
.iconfont{
  color:#FF0000;
  font-size: 24px;
}
.message-box{
  width:600px;
  height:300px;
  border:1px solid #ededed
}
</style>
