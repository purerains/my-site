<template>
  <i class="iconfont iconfont-container" :class="iconClass"></i>
</template>

<script>
const iconMap = {
  zhuye:'icon-zhuye',
  camera:"icon-camera",
  saoyisao:"icon-saoyisao",
  search:"icon-sousuo"
}
export default {
  props:{
    type:{
      required:true
    }
  },
  computed:{
    iconClass(){
      return iconMap[this.type]
    }
  }

}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_799112_d113buu1jmv.css";
</style>