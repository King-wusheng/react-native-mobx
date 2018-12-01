import React, { Component } from 'react'
import {View,Image} from 'react-native'
import styles from './navStyle'
import {inject,observer} from 'mobx-react'

interface Props{
    store ?: any
}
interface State {
    navImg:Array<any>
}
@inject('store')
@observer
export default class NavMain extends Component<Props,State>{
    constructor(props:Props){
        super(props)
        this.state={
            navImg:[]
        }
    }
    render(){
        const navmess = this.props.store.TopImg.ImageData.recommendedContent||[]
        return ( 
            <View style={styles.main}>
                {
                    navmess.length>0
                    ?
                    navmess.map((v:any,i:number)=>{
                        return <View style={styles.nav} key={i}>
                            {
                                v.items.map((v:any,i:any)=>{
                                    return (
                                        <Image key={i} style={styles.navimg} source={{uri:v.imgUrl}}></Image>
                                    )
                                })
                            }
                        </View>
                    })
                    :
                    null
                }
            </View>
        )
    }
}