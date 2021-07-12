import Vue from 'vue'
export default function(comp,props){
    let vm = new Vue({
        render: (h) => h(comp,{props}),
      })
      vm.$mount()
      console.log(vm.$el)
      return vm.$el
}