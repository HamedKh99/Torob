import React , {Component} from 'react';
import {Image, View, TouchableHighlight} from 'react-native';
import sizes from '../config/sizes';
import ImageZoom from 'react-native-image-pan-zoom';
import { Icon } from 'native-base';
import ProductImagesList from './ProductImagesList';

class ImageGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageNum : this.props.chosenIndex,
        };
    }

    changeImage = (offsetX) => {
        if(offsetX > 60) {
            if(this.state.imageNum !== this.props.images.length - 1) {
                this.setState({imageNum : this.state.imageNum + 1});
            }
        } else if(offsetX < -60) {
            if(this.state.imageNum !== 0) {
                this.setState({imageNum : this.state.imageNum - 1});
            }
        }
    }

    setChosenIndex = (index) => {
        this.setState({imageNum : index});
    }

    render() {
        return(
            <View style={{flex : 1, backgroundColor:'black', justifyContent:'space-between'}}>
                <View style={{justifyContent:'flex-start', alignItems:'flex-start'}}>
                    <TouchableHighlight onPress={() => this.props.setModalVisible(false)}>
                        <Icon type='EvilIcons' name='close' style={{color:'white', fontSize:50}}/>
                    </TouchableHighlight>
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <ImageZoom style={{paddingBottom : 150}}
                            cropWidth={sizes.screenWidth}
                            cropHeight={sizes.screenHeight}
                            imageWidth={200}
                            imageHeight={120}
                            onDragLeft={this.changeImage}
                            horizontalOuterRangeOffset={(offsetX) => {this.changeImage(offsetX)}}>
                        <Image style={{width:200, height:120}}
                            resizeMode='contain'
                            source={{uri:this.props.images[this.state.imageNum]}}/>               
                    </ImageZoom>
                </View>
                <View style={{position:'absolute', left:0, right:0, bottom:0}}>
                    <ProductImagesList images={this.props.images} setChosenIndex={this.setChosenIndex}/>
                </View>
            </View>
        )
    }
}

export default ImageGallery;