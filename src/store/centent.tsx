import {observable,action,runInAction} from 'mobx'

class Content{
    //定义可观察属性
    @observable Data:Array<any>=[]
    @action getCenterMess(){
        fetch('http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H')
        .then(response=>response.json())
        .then(result=>{
            //runInAction 语法糖  异步执行
            runInAction(()=>{
                this.Data = result.data
            })
        })
    }
}


export default new Content()