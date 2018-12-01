import {observable,action,runInAction} from 'mobx'

class TopImg{
    //定义可观察属性
    @observable ImageData:Array<any>=[]
    @action getSwiper(){
        fetch('http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D')
        .then(response=>response.json())
        .then(result=>{
            //runInAction 语法糖  异步执行
            runInAction(()=>{
                this.ImageData = result.data
            })
        })
    }
}


export default new TopImg()