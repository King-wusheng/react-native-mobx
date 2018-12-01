var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { inject, observer } from 'mobx-react';
import Swiper from 'react-native-swiper';
import styles from './swiperStyle';
let Swipers = class Swipers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiperImg: []
        };
    }
    render() {
        const swiper = this.props.store.TopImg.ImageData.carousel || [];
        return (React.createElement(View, { style: styles.swiperWrapper }, swiper.length > 0
            ?
                React.createElement(Swiper, { autoplay: true, autoplayTimeout: 3 }, swiper.map((v, i) => {
                    return (React.createElement(View, { key: i, style: styles.swiperSlide },
                        React.createElement(Image, { style: { width: '100%', height: 166 }, source: { uri: v.picUrl } })));
                }))
            :
                null));
    }
};
Swipers = __decorate([
    inject('store'),
    observer
], Swipers);
export default Swipers;
//# sourceMappingURL=swiper.js.map