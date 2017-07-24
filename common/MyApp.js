import React, {Component} from 'react';
import {Text, View, ScrollView, Image, ListView} from 'react-native';

export default class MyApp extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    static navigationOptions = {
        title: 'Hello',
    };

    render() {
        return (
            <View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <Text style={this.props.style}>Hello {this.props.children}!</Text>
                </View>
                <ScrollView style={{height: 100}}>
                    <Text style={{fontSize: 96}}>Scroll me plz</Text>
                    <Image source={require('../images/狗头.jpg')}/>
                    <Text style={{fontSize: 96}}>If you like</Text>
                    <Image source={require('../images/狗头.jpg')}/>
                    <Text style={{fontSize: 80}}>React Native</Text>
                </ScrollView>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        )
    }
}