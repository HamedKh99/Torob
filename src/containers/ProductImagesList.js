import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import ProductImage from '../components/ProductImage';

class ProductImagesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <FlatList
                style = {{marginTop : 10}}
                data = {this.props.images}
                horizontal = {true}
                renderItem = {({item}) => <ProductImage setModalVisible={this.props.setModalVisible} photo_url={item}/>}
                showsHorizontalScrollIndicator = {false}/>
            </View>
            
            
        )
    }
}

export default ProductImagesList;