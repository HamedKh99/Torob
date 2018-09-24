import React, {Component} from 'react';
import {Header, Left, Body, Right} from 'native-base';
import {Text} from 'react-native';
import colors from '../config/colors';

const AppHeader = (props) => {
    return(
        <Header style={{backgroundColor: colors.primaryColor}} androidStatusBarColor={colors.primaryColor}>
            <Left style={{flex:1, paddingLeft : 20}}>
                <Text style={{color: 'white'}}>{props.title}</Text>
            </Left>
            <Body style={{flex:1, alignItems:'center'}}>
  
            </Body>
            <Right style={{flex:1}}>
            </Right>
        </Header>
    )
}

export default AppHeader;