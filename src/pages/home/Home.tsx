import React from 'react'

import TabNavigator from 'react-native-tab-navigator'

import {
  View,
  Text,
  Image
} from 'react-native'
import {inject,observer} from 'mobx-react'
import HomePage from '../shouye/homepage'

import styles from './styles'

const bottom = require('../../../assets/images/bottom.png')
const bottoma = require('../../../assets/images/bottoma.png')
const shopping_n = require('../../../assets/images/shopping_n.png')
const shopping_r = require('../../../assets/images/shopping_r.png')
const cart_n = require('../../../assets/images/cart_n.png')
const cart_r = require('../../../assets/images/cart_r.png')
const my_n = require('../../../assets/images/my_n.png')
const my_r = require('../../../assets/images/my_r.png')

interface Props {
  store?:any
}

interface State {
  selectedTab: string
}
@inject ('store')
@observer
export default class Home extends React.Component<Props, State> {
  constructor (props: any) {
    super(props)
    this.state = {
      selectedTab: 'home'
    }
  }
  render () {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="大全"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Image style={styles.imgSize} source={bottom} />}
          renderSelectedIcon={() => <Image style={styles.imgSize} source={bottoma} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <HomePage></HomePage>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'category'}
          title="分类"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Image style={styles.imgSize} source={shopping_n} />}
          renderSelectedIcon={() => <Image style={styles.imgSize} source={shopping_r} />}
          onPress={() => this.setState({ selectedTab: 'category' })}>
          <View><Text>category</Text></View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'map'}
          title="地图"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Image style={styles.imgSize} source={cart_n} />}
          renderSelectedIcon={() => <Image style={styles.imgSize} source={cart_r} />}
          onPress={() => this.setState({ selectedTab: 'map' })}>
          <View><Text>map</Text></View>
        </TabNavigator.Item>
        <TabNavigator.Item
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          selected={this.state.selectedTab === 'profile'}
          title="更多"
          renderIcon={() => <Image style={styles.imgSize} source={my_n} />}
          renderSelectedIcon={() => <Image style={styles.imgSize} source={my_r} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <View><Text>profile</Text></View>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}