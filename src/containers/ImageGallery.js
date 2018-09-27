import React , {Component} from 'react';
import {Image, View, TouchableHighlight} from 'react-native';
import sizes from '../config/sizes';
import ImageZoom from 'react-native-image-pan-zoom';
import { Icon } from 'native-base';

class ImageGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageNum : 0,
        };
    }

    changeImage = (offsetX) => {
        console.warn(offsetX);
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

    render() {
        return(
            <View style={{flex : 1, backgroundColor:'black'}}>
                <TouchableHighlight onPress={() => this.props.setModalVisible(false)}>
                    <Icon type='EvilIcons' name='close' style={{color:'white', fontSize:50}}/>
                </TouchableHighlight>
                <ImageZoom cropWidth={sizes.screenWidth}
                        cropHeight={sizes.screenHeight}
                        imageWidth={200}
                        imageHeight={200}
                        onDragLeft={this.changeImage}
                        horizontalOuterRangeOffset={(offsetX) => {this.changeImage(offsetX)}}>
                    <Image style={{width:200, height:200}}
                        source={{uri:this.props.images[this.state.imageNum]}}/>               
                </ImageZoom>
            </View>
        )
    }
}

export default ImageGallery;