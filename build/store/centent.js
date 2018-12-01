var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, runInAction } from 'mobx';
class Content {
    constructor() {
        //定义可观察属性
        this.Data = [];
    }
    getCenterMess() {
        fetch('http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H')
            .then(response => response.json())
            .then(result => {
            //runInAction 语法糖  异步执行
            runInAction(() => {
                this.Data = result.data;
            });
        });
    }
}
__decorate([
    observable
], Content.prototype, "Data", void 0);
__decorate([
    action
], Content.prototype, "getCenterMess", null);
export default new Content();
//# sourceMappingURL=centent.js.map