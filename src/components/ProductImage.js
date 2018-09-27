import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import sizes from '../config/sizes';

const ProductImage = (props) => {
    return(
        <TouchableOpacity onPress={() => {props.setChosenIndex(props.id) , props.setModalVisible(true)}}>
            <Image style={{width : sizes.screenWidth / 4, height : sizes.screenWidth / 4}} source={{uri: props.photo_url}}/>
        </TouchableOpacity>
    )
}

export default ProductImage;