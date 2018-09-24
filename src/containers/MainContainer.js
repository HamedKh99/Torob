import React , {Component} from 'react';
import {View, Text} from 'react-native';
import AppHeader from '../components/Header';
import ProductImagesList from './ProductImagesList';
import ActionSection from '../components/ActionSection';
import TabBox from './TabBox';

class MainContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <AppHeader title="iPhone 7 128GB"/>
                <ProductImagesList/>
                <ActionSection name="iPhone 7 128GB"/>
                <TabBox/>
            </View>
        )
    }
}

export default MainContainer;