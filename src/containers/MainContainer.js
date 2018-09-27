import React , {Component} from 'react';
import {View, Text, Modal, TouchableHighlight} from 'react-native';
import {Icon} from 'native-base';
import AppHeader from '../components/Header';
import ProductImagesList from './ProductImagesList';
import ActionSection from '../components/ActionSection';
import TabBox from './TabBox';
import {connect} from 'react-redux';
import {requestFetchData} from '../actions/fetchData'
import LoadingScreen from './LoadingScreen';
import ImageGallery from './ImageGallery';

class MainContainer extends Component {
    constructor(props){
        super(props);
        this.state = {modalVisible:false};
        this.props.requestFetchData();
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible : visible});
    }

    render() {
        let toReturn;
        if(this.props.loading) {
            toReturn = <LoadingScreen/>
        } else if(this.props.success) {
            toReturn = 
            <View style={{flex:1, backgroundColor:'white'}}>
                <Modal
                    animationType = 'fade'
                    transparent = {false}
                    visible = {this.state.modalVisible}
                >
                    <ImageGallery setModalVisible={this.setModalVisible} images={this.props.images}/>
                </Modal>
                <AppHeader title="iPhone 7 128GB"/>
                <ProductImagesList images={this.props.images} setModalVisible={this.setModalVisible}/>
                <ActionSection name="iPhone 7 128GB"/>
                <TabBox/>
            </View>
        } else {
            toReturn = <Text>{this.props.error}</Text>
        }

        return toReturn;
    }
}

const mapStateToProps = state => {
    return({
        loading : state.fetchDataReqReducer.loading,
        success : state.fetchDataReqReducer.success,
        error : state.fetchDataReqReducer.error,
        images : state.fetchDataReqReducer.images
    })
}

const mapDispatchToProps = dispatch => {
    return({
        requestFetchData : () => dispatch(requestFetchData())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);