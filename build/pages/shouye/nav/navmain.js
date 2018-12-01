var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './navStyle';
import { inject, observer } from 'mobx-react';
let NavMain = class NavMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navImg: []
        };
    }
    render() {
        const navmess = this.props.store.TopImg.ImageData.recommendedContent || [];
        return (React.createElement(View, { style: styles.main }, navmess.length > 0
            ?
                navmess.map((v, i) => {
                    return React.createElement(View, { style: styles.nav, key: i }, v.items.map((v, i) => {
                        return (React.createElement(Image, { key: i, style: styles.navimg, source: { uri: v.imgUrl } }));
                    }));
                })
            :
                null));
    }
};
NavMain = __decorate([
    inject('store'),
    observer
], NavMain);
export default NavMain;
//# sourceMappingURL=navmain.js.map