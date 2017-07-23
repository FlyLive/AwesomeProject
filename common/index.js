import React,{Component} from 'react'
import {Text,View} from 'react-native'

export default class index extends Component{
    render(){
        return(
            <Text style={this.props.style}>Hello{this.props.children}!</Text>
        )
    }
}