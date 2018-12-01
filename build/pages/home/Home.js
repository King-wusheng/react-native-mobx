var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { View, Text, Image } from 'react-native';
import { inject, observer } from 'mobx-react';
import HomePage from '../shouye/homepage';
import styles from './styles';
const bottom = require('../../../assets/images/bottom.png');
const bottoma = require('../../../assets/images/bottoma.png');
const shopping_n = require('../../../assets/images/shopping_n.png');
const shopping_r = require('../../../assets/images/shopping_r.png');
const cart_n = require('../../../assets/images/cart_n.png');
const cart_r = require('../../../assets/images/cart_r.png');
const my_n = require('../../../assets/images/my_n.png');
const my_r = require('../../../assets/images/my_r.png');
let Home = class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }
    render() {
        return (React.createElement(TabNavigator, null,
            React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'home', title: "\u5927\u5168", titleStyle: styles.titleStyle, selectedTitleStyle: styles.selectedTitleStyle, renderIcon: () => React.createElement(Image, { style: styles.imgSize, source: bottom }), renderSelectedIcon: () => React.createElement(Image, { style: styles.imgSize, source: bottoma }), onPress: () => this.setState({ selectedTab: 'home' }) },
                React.createElement(HomePage, null)),
            React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'category', title: "\u5206\u7C7B", titleStyle: styles.titleStyle, selectedTitleStyle: styles.selectedTitleStyle, renderIcon: () => React.createElement(Image, { style: styles.imgSize, source: shopping_n }), renderSelectedIcon: () => React.createElement(Image, { style: styles.imgSize, source: shopping_r }), onPress: () => this.setState({ selectedTab: 'category' }) },
                React.createElement(View, null,
                    React.createElement(Text, null, "category"))),
            React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'map', title: "\u5730\u56FE", titleStyle: styles.titleStyle, selectedTitleStyle: styles.selectedTitleStyle, renderIcon: () => React.createElement(Image, { style: styles.imgSize, source: cart_n }), renderSelectedIcon: () => React.createElement(Image, { style: styles.imgSize, source: cart_r }), onPress: () => this.setState({ selectedTab: 'map' }) },
                React.createElement(View, null,
                    React.createElement(Text, null, "map"))),
            React.createElement(TabNavigator.Item, { titleStyle: styles.titleStyle, selectedTitleStyle: styles.selectedTitleStyle, selected: this.state.selectedTab === 'profile', title: "\u66F4\u591A", renderIcon: () => React.createElement(Image, { style: styles.imgSize, source: my_n }), renderSelectedIcon: () => React.createElement(Image, { style: styles.imgSize, source: my_r }), onPress: () => this.setState({ selectedTab: 'profile' }) },
                React.createElement(View, null,
                    React.createElement(Text, null, "profile")))));
    }
};
Home = __decorate([
    inject('store'),
    observer
], Home);
export default Home;
//# sourceMappingURL=Home.js.map