<template>
  <div>
    <button :class="typeClass" 
    >
        <slot></slot>
    </button>
  </div>
</template>

<script>
import{defineComponent,ref} from 'vue'
export default defineComponent(
  {
    name:'Sj-button',
    props:{
      type:String
    },
    //props,有两种方式，一种是数组形式，数组是不能指定传递参数类型的，还有一种是对象类型，这样是可以指定传递的props类型的
    // props:{
    //   type:String,
    // },
    //setup()组合式api这是vue3最为关键的一点
    setup(props,{sttrs,slots,emit}){
      console.log(props.type)
      let typeClass = ref(props.type)
      return{
        typeClass
      }
    }
}
)
</script>

<style lang="less">
//有些报错可能是包的版本问题in ./src/components/Sjbutton/index.vue?vue&type=style&index=0&id=2102d888&lang=less  Syntax Error: 
//就是less-loader版本过高，卸载安装低版本就行
//Do not use empty rulesets报错就是我写了选择器但是没有写值就是会报这个错误，也是eslint的问题
.primary{
color: rgb(117, 182, 74);
}
.normal{
width: 100px;
height: 100px;
}
.normal{
width: 100px;
height: 100px;
}

</style>