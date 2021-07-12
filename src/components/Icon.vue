<template>
  <i class="iconfont iconfont-container" :class="iconClass"></i>
</template>

<script>
const iconMap = {
  zhuye:'icon-zhuye',
  camera:"icon-camera",
  saoyisao:"icon-saoyisao",
  search:"icon-sousuo",
  error:"icon-error",
  info:"icon-prompt",
  success:"icon-success",
  warn:"icon-warning",
  explain:"icon-explain",
  notification:"icon-notification",
  setting:"icon-setting",
  telephone:"icon-telephone"
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
@import "//at.alicdn.com/t/font_799112_x0qi5huz0ik.css";
.iconfont-container{
  font-size: inherit;
}
</style>