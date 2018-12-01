import React, { Component } from 'react'
import {
    View,
    Image
  } from 'react-native';
import {inject,observer} from 'mobx-react'
  import Swiper from 'react-native-swiper';

  import styles from './swiperStyle'
interface Props {
    store?:any
}
interface State {
    swiperImg:Array<any>
}

@inject('store')
@observer
export default class Swipers extends Component<Props,State>{
    
    constructor(props:Props){
        super(props)
        this.state={
            swiperImg:[]
        }
    }
    render(){
        const swiper = this.props.store.TopImg.ImageData.carousel||[]
        return(
            <View style={styles.swiperWrapper}>
                
                    {
                        swiper.length>0
                        ? 
                        <Swiper autoplay={true} autoplayTimeout={3}>
                            {swiper.map((v:any,i:number)=>{
                                return(
                                    <View key={i} style={styles.swiperSlide}>
                                        <Image style={{width:'100%',height:166}} source={{uri:v.picUrl}} />
                                    </View>
                                )
                            })}
                        </Swiper>
                        : 
                        null
                            
                    }
            </View>
           
        )
    }

    // componentWillMount(){
    //     fetch('http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D')
    //     .then(response=>response.json())
    //     .then(result=>{
    //         this.setState({
    //             swiperImg:result.data.carousel
    //         })
    //     })
    // }
}