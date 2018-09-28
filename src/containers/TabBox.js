import React , {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import colors from '../config/colors';
import sizes from '../config/sizes';

const FirstRoute = () => (
    <View style={{flex:1 ,backgroundColor:'red'}}/>
);
const SecondRoute = () => (
    <View style={{flex:1, backgroundColor:'blue'}}/>
);


class TabBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'فروشندگان' },
                { key: 'second', title: 'مشخصات' },
            ],
        };
    }

    renderLabel = (props) => {
        let index = 0;
        return ({ route }) => {
            const focused = index === props.navigationState.index;
            index += 1;
            return (
            <View>
                <Text
                style={focused ? styles.activeTab : styles.inactiveTab}
                >
                {route.title}
                </Text>
            </View>
            );
        };
    }

    renderTabBar = (props) => {
        return(
            <TabBar 
                {...props}
                indicatorStyle={{ backgroundColor: colors.primaryColor }}
                style = {{backgroundColor: 'white'}}
                renderLabel = {this.renderLabel(props)}
            />
        )
    }

    render() {
        return(
            <TabView
                style={{marginTop : 20}}
                navigationState={this.state}
                renderScene={SceneMap({
                first: FirstRoute,
                second: SecondRoute,})}
                renderTabBar={this.renderTabBar}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: sizes.screenWidth}}
            />
        )
    }
}

const styles = StyleSheet.create({
    activeTab : {
        color : colors.primaryColor,
        fontWeight : 'bold',
        paddingBottom : 10
    },
    inactiveTab : {
        color : '#9ca2ad',
        paddingBottom : 10
    }
})

export default TabBox;
