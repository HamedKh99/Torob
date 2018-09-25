import React from 'react';
import {View, Text} from 'react-native';
import {Spinner} from 'native-base'; 
import AppHeader from '../components/Header';
import colors from '../config/colors';

const LoadingScreen = (props) => {
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <AppHeader title="درحال بارگیری محصول"/>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Spinner color={colors.primaryColor}/>
            </View>
        </View>
    )
}

export default LoadingScreen;