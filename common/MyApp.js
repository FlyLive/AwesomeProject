import React, {Component} from 'react';
import {Text, View, ScrollView, Image, ListView, TouchableHighlight} from 'react-native';

class MyApp extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy'
            ])
        };
    }
    componentDidMount() {
        this.timer = setTimeout(
            () => { console.log('把一个定时器的引用挂在this上'); },
            500
        );
    }
    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写

        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    static navigationOptions = ({navigation}) => ({
        title: 'Hello ' + navigation.state.params.name
    })

    _onPressButton() {
        alert("You tapped the button!");
    }

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <Text>Hello {params.name}!</Text>
                </View>
                <ScrollView style={{height: 100}}>
                    <Text style={{fontSize: 96}}>Scroll me please</Text>
                    <Image source={require('../images/狗头.jpg')}/>
                    <Text style={{fontSize: 96}}>If you like</Text>
                    <Image source={require('../images/狗头.jpg')}/>
                    <Text style={{fontSize: 80}}>React Native</Text>
                </ScrollView>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
                <TouchableHighlight onPress={this._onPressButton}>
                    <Text>Button</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default MyApp