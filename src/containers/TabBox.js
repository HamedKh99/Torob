import React , {Component} from 'react';
import {View, Dimensions} from 'react-native';
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

    render() {
        return(
            <TabView
                style={{marginTop : 20}}
                navigationState={this.state}
                renderScene={SceneMap({
                first: FirstRoute,
                second: SecondRoute,
                })}
                renderTabBar={props =>
                    <TabBar
                      {...props}
                      indicatorStyle={{ backgroundColor: colors.primaryColor }}
                      style = {{backgroundColor: 'white'}}
                      labelStyle = {{color : '#9ca2ad'}}
                    />
                }
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: sizes.screenWidth}}
            />
        )
    }
}

export default TabBox;
