var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
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
        return (React.createElement(ScrollView, null,
            React.createElement(View, { style: styles.root },
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
                    React.createElement(Image, { style: { width: '100%', height: 152 }, source: { uri: scrollContent.length > 0 ? scrollContent[1].items[0].imgUrl : null } })),
                React.createElement(View, { style: { width: '100%', height: 222, borderBottomColor: '#e5e5e5', borderBottomWidth: 1 } },
                    React.createElement(View, { style: { width: '100%', height: 222, paddingTop: 15, backgroundColor: '#f4f4f4' } },
                        React.createElement(View, { style: { width: '100%', height: 51, paddingTop: 15, paddingBottom: 15, alignItems: 'center', backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center' } },
                            React.createElement(Text, { style: { width: 75, height: 1, backgroundColor: '#011e00', marginLeft: 11, marginRight: 11 } }),
                            React.createElement(Text, null, "\u9650\u65F6\u7279\u60E0"),
                            React.createElement(Text, { style: { width: 75, height: 1, backgroundColor: '#011e00', marginLeft: 11, marginRight: 11 } })),
                        React.createElement(View, { style: { width: '100%', height: 156, paddingTop: 14, paddingRight: 12, paddingBottom: 14, paddingLeft: 12, flexDirection: 'row', backgroundColor: '#fff' } },
                            React.createElement(View, { style: { width: 130, height: 130, } },
                                React.createElement(Image, { style: { width: '100%', height: '100%' }, source: { uri: 'https://img.wochu.cn/upload/63138675-a140-4453-ab13-aee76d6def74.jpg' } })),
                            React.createElement(View, { style: { width: 217, height: 217, paddingLeft: 10 } },
                                React.createElement(Text, { style: { color: '#666', marginTop: 16, fontSize: 16 } }, "\u7687\u5E1D\u8D21\u67D16\u53EA\u88C5(\u5355\u679C80g\u4EE5\u4E0A)"),
                                React.createElement(View, { style: { marginTop: 44, flexDirection: 'row', } },
                                    React.createElement(View, { style: { flexDirection: 'row' } },
                                        React.createElement(Text, { style: { color: '#ff5918', fontSize: 15 } }, "\uFFE59.9"),
                                        React.createElement(Text, { style: { fontSize: 12, color: '#999' } }, "\uFFE515")),
                                    React.createElement(Image, { source: { uri: 'http://wmall.wochu.cn/h5/home/vueimg/add.png' } })))))))));
    }
};
componentName = __decorate([
    inject('store'),
    observer
], componentName);
export default componentName;
//# sourceMappingURL=homepage.js.map