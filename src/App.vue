<template>
  <div id="app">
    <!-- <SideBar/> -->
    <Layout>
      <template v-slot:left>
        <SideBar/>
      </template>

      <template v-slot:main>
        <div>撒大声地是的多所所多Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto, quidem debitis modi laboriosam ipsa illum labore temporibus inventore sit sed odio magni dicta! Vitae porro amet possimus voluptatum velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, accusantium. Inventore aliquam adipisci reprehenderit doloremque qui nobis doloribus libero, voluptatum quas dolorem corrupti vero ab id ducimus deserunt modi officiis!</div>
      </template>
    </Layout>
    <!-- <Avatar :size="50" url="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"/>
    <Icon type='camera'/>
     <Icon type='zhuye'/>
     <Pagenation @changePage = "handleChangePage" :total="403" :current="current"/> -->
      
  </div>
</template>

<script>

import SideBar from './components/SideBar.vue'
import Icon from './components/Icon.vue'
import Pagenation from './components/Pagenation.vue'
import Concat from './components/Concat.vue'
import Nav from './components/Nav.vue'
import Layout from './components/Layout.vue'
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
  methods:{
    handleChangePage(page){
      console.log(page)
      this.current = page
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
</style>
