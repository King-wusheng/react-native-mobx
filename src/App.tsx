import React from 'react'

import Home from './pages/home/Home'
import {Provider} from 'mobx-react'
import store from './store'
export default class componentName extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home></Home>
      </Provider>
      
    )
  }
  //执行store中函数，获取数据
  componentDidMount(){
    store.TopImg.getSwiper()
    store.Content.getCenterMess()
  }

}
