<template>
  <div class="pagenation-container">
    <a @click="handleChangePage(1)"  :class="{disabled:current===1}">|&lt;&lt;</a>
    <a @click="handleChangePage(current-1)" :class="{disabled:current===1}">&lt;&lt;</a>
    <a @click="handleChangePage(n)" v-for="(n,i) in pageArr" :key='i'  :class="{active:current===n}">{{n}}</a> 
    <a @click="handleChangePage(current+1)" :class="{disabled:current===pageNumber}">&gt;&gt;</a>
    <a @click="handleChangePage(pageNumber)" :class="{disabled:current===pageNumber}">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props:{
    current:{
      type:Number,
      default:1
    },
    total:{
      type:Number,
      required:true
    },
    pageSize:{
      type:Number,
      default:10,
    },
    visibleNumber:{
      type:Number,
      default:10
    }
    
  },
  methods:{
    handleChangePage(newPage){
     if(newPage<1){
       newPage = 1
     }
     if(newPage>this.pageNumber){
       newPage = this.pageNumber
     }
     if(newPage===this.current){
       return
     }
      this.$emit("changePage",newPage)
    }
  },
  computed:{
    pageMin(){
      let min = this.current-this.pageSize/2
      if(min<=1){
        min = 1
      }
      return min
    },
    pageMax(){
      let max = this.pageMin+this.pageSize-1
      if(max>=this.pageNumber){
        max = this.pageNumber
      }
      return max
    },
    pageArr(){
      let arr = []
      for(let i=this.pageMin;i<=this.pageMax;i++){
        arr.push(i)
      }
      return arr
    },
    pageNumber(){
      return Math.ceil(this.total/this.pageSize)
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
  .pagenation-container{
    display: flex;
    justify-content: center;
    a{
      color:@dark;
      padding:4px;
      margin:0 3px;
      cursor: pointer;
      &:hover{
        color:@primary
      }
      &.disabled{
        color:@gray;
        cursor:text;
      }
      &.active{
        color:@primary
      }
    }
  }

</style>