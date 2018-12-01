var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, runInAction } from 'mobx';
class TopImg {
    constructor() {
        //定义可观察属性
        this.ImageData = [];
    }
    getSwiper() {
        fetch('http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D')
            .then(response => response.json())
            .then(result => {
            //runInAction 语法糖  异步执行
            runInAction(() => {
                this.ImageData = result.data;
            });
        });
    }
}
__decorate([
    observable
], TopImg.prototype, "ImageData", void 0);
__decorate([
    action
], TopImg.prototype, "getSwiper", null);
export default new TopImg();
//# sourceMappingURL=navimg.js.map