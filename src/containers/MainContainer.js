import React , {Component} from 'react';
import {View, Text} from 'react-native';
import AppHeader from '../components/Header';
import ProductImagesList from './ProductImagesList';
import ActionSection from '../components/ActionSection';

class MainContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style={{backgroundColor:'white'}}>
                <AppHeader title="iPhone 7 128GB"/>
                <ProductImagesList/>
                <ActionSection name="iPhone 7 128GB"/>
            </View>
        )
    }
}

export default MainContainer;