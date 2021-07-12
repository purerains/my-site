<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.layout-container{
  width:100%;
  height:100%;

  display:flex;
  .left{
    
  }
  .main{
    flex:1;
    box-sizing: border-box;
    padding:15px;
  }
  .right{
    
  }

}
</style>