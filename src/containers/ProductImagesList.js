import React, {Component} from 'react';
import {FlatList} from 'react-native';
import ProductImage from '../components/ProductImage';

class ProductImagesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.data = [{photo_url : "https://file.digi-kala.com/digikala/Image/Webstore/ProductPhoto/P_222906/Original/9508e5.jpg"},
                    {photo_url : "https://file.digi-kala.com/digikala/Image/Webstore/ProductPhoto/P_222906/Original/9508e5.jpg"},
                    {photo_url : "https://file.digi-kala.com/digikala/Image/Webstore/ProductPhoto/P_222906/Original/9508e5.jpg"},
                    {photo_url : "https://file.digi-kala.com/digikala/Image/Webstore/ProductPhoto/P_222906/Original/9508e5.jpg"},
                    {photo_url : "https://file.digi-kala.com/digikala/Image/Webstore/ProductPhoto/P_222906/Original/9508e5.jpg"},
                    {photo_url : "https://file.digi-kala.com/digikala/Image/Webstore/ProductPhoto/P_222906/Original/9508e5.jpg"}]
        return(
            <FlatList
                style = {{marginTop : 10}}
                data = {this.data}
                horizontal = {true}
                renderItem = {({item}) => <ProductImage photo_url={item.photo_url}/>}
                showsHorizontalScrollIndicator = {false}/>
            
        )
    }
}

export default ProductImagesList;