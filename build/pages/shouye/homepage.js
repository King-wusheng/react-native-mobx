var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Swipers from './swiper/swiper';
import NavMain from './nav/navmain';
import { inject, observer } from 'mobx-react';
const logo = require('../../../assets/images/wochuLogo.png');
const icon = require('../../../assets/images/icon.png');
const search = require('../../../assets/images/search.png');
const title = require('../../../assets/images/center.jpg');
const down = require('../../../assets/images/down.png');
let componentName = class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bool: true
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                bool: !this.state.bool
            });
        }, 2000);
    }
    render() {
        // console.log(this.state.bool)
        const scrollContent = this.props.store.Content.Data.acts || [];
        return (React.createElement(View, { style: styles.root },
            React.createElement(View, { style: styles.Top }),
            React.createElement(View, { style: styles.topnav },
                React.createElement(View, { style: styles.logobox },
                    React.createElement(Image, { style: styles.logo, source: logo })),
                React.createElement(View, { style: styles.address },
                    React.createElement(Text, { style: styles.addresstxt }, "\u8BF7\u586B\u5199\u5730\u5740"),
                    React.createElement(Image, { style: styles.icon, source: icon })),
                React.createElement(View, { style: styles.search },
                    React.createElement(Image, { style: { width: 18, height: 18 }, source: search }))),
            React.createElement(View, null,
                React.createElement(Swipers, null)),
            React.createElement(View, null,
                React.createElement(NavMain, null)),
            React.createElement(View, { style: styles.centerswiper },
                React.createElement(View, { style: styles.leftlogo },
                    React.createElement(Image, { source: title, style: styles.clogo })),
                React.createElement(View, { style: styles.ctxt },
                    React.createElement(View, { style: { width: 276, position: 'relative', overflow: 'hidden' } },
                        React.createElement(View, { style: { width: 276, height: 114, position: 'absolute', top: this.state.bool ? -57 : 0, } }, scrollContent.length > 0
                            ?
                                scrollContent.slice(0, 1)[0].items.map((v, i) => {
                                    return (React.createElement(View, { key: i, style: { width: '100%', height: 57, justifyContent: 'center', paddingLeft: 13 } },
                                        React.createElement(Text, { style: { color: '#000', fontSize: 13 } }, v.title)));
                                })
                            :
                                null)),
                    React.createElement(View, { style: { width: 45, height: '100%', alignItems: 'center', justifyContent: 'center' } },
                        React.createElement(Image, { source: down, style: { width: 15, height: 8 } })))),
            React.createElement(View, { style: { width: '100%', height: 152 } },
                React.createElement(Image, { style: { width: '100%', height: 152 }, source: { uri: scrollContent.length > 0 ? scrollContent[1].items[0].imgUrl : null } }))));
    }
};
componentName = __decorate([
    inject('store'),
    observer
], componentName);
export default componentName;
//# sourceMappingURL=homepage.js.map