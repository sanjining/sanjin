//这是统一暴露于用于install组件的方法
import { VueElement } from "vue"
import sjButton from "./Sjbutton"




let SJ = {
    install:function(){
        VueElement.component(sjButton.name,sjButton)
    }
}

export default SJ