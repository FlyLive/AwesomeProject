/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {StackNavigator} from 'react-navigation';
import IndexScreen from './common'

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!</Text>
                <Text style={styles.welcome}>
                    Hello ReactNative!</Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <View>
                    <TextInput style={{height: 40, width: 200}}
                               placeholder="Type here to translate!"
                               onChangeText={(text) => this.setState({text: text})}
                    /><Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                </View>
                <Image source={pic} style={{width: 200, height: 100}}/>
                <Image source={require('./images/狗头.jpg')} style={{width: 200, height: 200}}><View><Text
                    style={styles.welcome}>我是狗头</Text></View></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const AwesomeProject = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: IndexScreen},
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
