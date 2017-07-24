import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, TextInput, Button, Animated} from 'react-native'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            fadeAnim: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.fadeAnim,                      // 动画中的变量值
            {
                toValue: 1,                             // 透明度最终变为1，即完全不透明
            }
        ).start();                                  // 开始执行动画
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        navigate('MyApp', {name: 'Lucy'})
                    }
                />
                <Text style={styles.welcome}>
                    Hello ReactNative!</Text>
                <Text style={styles.instructions}>
                    Fighting go!
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
                <Image source={require('../images/狗头.jpg')} style={{width: 200, height: 200}}>
                    <Animated.View style={{
                        ...this.props.style,
                        opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
                    }}><Text style={styles.welcome}>我是狗头</Text></Animated.View></Image>
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

export default Index