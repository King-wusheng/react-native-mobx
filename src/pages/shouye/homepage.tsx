import React, { Component } from 'react'
import {Text,View,Image,ScrollView} from 'react-native'
import styles from './styles'
import Swipers from './swiper/swiper'
import NavMain from './nav/navmain'
import {inject,observer} from 'mobx-react'
const logo = require('../../../assets/images/wochuLogo.png')
const icon = require('../../../assets/images/icon.png')
const search = require('../../../assets/images/search.png')
const title = require('../../../assets/images/center.jpg')
const down = require('../../../assets/images/down.png')
interface Props {
    store?:any
}
interface State {
  bool:Boolean
}
@inject('store')
@observer
export default class componentName extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      bool:true
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        bool:!this.state.bool
      })
    },2000)
  }
  render():any {
    // console.log(this.state.bool)
    const scrollContent = this.props.store.Content.Data.acts || []
    return (
      <ScrollView>
        <View style={styles.root}>
          <View style={styles.Top}>
          </View>
          <View style={styles.topnav}>
            <View style={styles.logobox}>
              <Image style={styles.logo} source={logo}></Image>
            </View>
            
            <View style={styles.address}>
              <Text style={styles.addresstxt}>请填写地址</Text>
              <Image style={styles.icon} source={icon}></Image>
            </View>
            <View style={styles.search}>
              <Image style={{width:18,height:18}} source={search}></Image>
            </View> 
          </View>
          <View>
            <Swipers></Swipers>
          </View>
          <View>
              <NavMain></NavMain> 
          </View>
          <View style={styles.centerswiper}>
            <View style={styles.leftlogo}>
              <Image source={title} style={styles.clogo}></Image>
            </View>
            <View style={styles.ctxt}>
              <View style={{width:276,position:'relative',overflow:'hidden'}}>  
                <View style={{width:276,height:114,position:'absolute',top:this.state.bool?-57:0,}}>
                  {
                    scrollContent.length > 0 
                    ?
                    scrollContent.slice(0,1)[0].items.map((v:any,i:any)=>{
                      return (
                        <View key={i} style={{width:'100%',height:57,justifyContent:'center',paddingLeft:13}}>
                          <Text style={{color:'#000',fontSize:13}}>{v.title}</Text>
                        </View>
                      )
                    })
                    :
                    null
                  }
                </View>
              </View>
              <View style={{width:45,height:'100%',alignItems:'center',justifyContent:'center'}}>
                <Image source={down} style={{width:15,height:8}}></Image>
              </View>
            </View>
          </View>
          <View style={{width:'100%',height:152}}>
            <Image style={{width:'100%',height:152}} source={{uri:scrollContent.length>0?scrollContent[1].items[0].imgUrl:null}}></Image>
          </View>
          <View style={{width:'100%',height:222,borderBottomColor:'#e5e5e5',borderBottomWidth:1}}>
            <View style={{width:'100%',height:222,paddingTop:15,backgroundColor:'#f4f4f4'}}>
              <View style={{width:'100%',height:51,paddingTop:15,paddingBottom:15,alignItems:'center',backgroundColor:'#fff',flexDirection:'row',justifyContent:'center'}}>
                <Text style={{width:75,height:1,backgroundColor:'#011e00',marginLeft:11,marginRight:11}}></Text>
                <Text>限时特惠</Text>
                <Text style={{width:75,height:1,backgroundColor:'#011e00',marginLeft:11,marginRight:11}}></Text>
              </View>
              <View style={{width:'100%',height:156,paddingTop:14,paddingRight:12,paddingBottom:14,paddingLeft:12,flexDirection:'row',backgroundColor:'#fff'}}>
                <View style={{width:130,height:130,}}>
                  <Image style={{width:'100%',height:'100%'}} source={{uri:'https://img.wochu.cn/upload/63138675-a140-4453-ab13-aee76d6def74.jpg'}}></Image>
                </View>
                <View style={{width:217,height:217,paddingLeft:10}}>
                  <Text style={{color:'#666',marginTop:16,fontSize:16}}>皇帝贡柑6只装(单果80g以上)</Text>
                  <View style={{marginTop:44,flexDirection:'row',}}>
                    <View style={{flexDirection:'row'}}>
                      <Text style={{color:'#ff5918',fontSize:15}}>￥9.9</Text>
                      <Text style={{fontSize:12,color:'#999'}}>￥15</Text>
                    </View>
                    <Image source={{uri:'http://wmall.wochu.cn/h5/home/vueimg/add.png'}}></Image>
                  </View>
                </View>
              </View> 
            </View>
          </View>
        </View>
      </ScrollView>
      
    )
  }


  
}
