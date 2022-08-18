<template>
  <div>
    <button :class="typeClass"
    >
        按钮
    </button>
  </div>
</template>

<script>
export default {
    name:'Sj-button',
    //props,有两种方式，一种是数组形式，数组是不能指定传递参数类型的，还有一种是对象类型，这样是可以指定传递的props类型的
    props:{
      type:String,
    },
    //setup()组合式api这是vue3最为关键的一点
    setup(){
      
    }
}
</script>

<style>

</style>