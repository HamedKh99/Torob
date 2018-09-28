import React , {Component} from 'react';
import { View, TouchableOpacity, Text, Share } from "react-native";
import debounce from 'lodash/debounce';
import { Icon } from 'native-base';


class ActionSection extends Component {
    constructor(props) {
        super(props);
        this.state = {disabled : false};
        this.enableDelay = debounce(this.enableShare, 1000);
    }

    disableShare = () => {
        this.setState({disabled : true})
    }

    enableShare = () => {
        this.setState({disabled : false});
    }

    onClick = () => {
        this.disableShare();
        Share.share({
            message: 'این محصول را در ترب دیدم',
          }, {
            dialogTitle: 'از چه طریقی محصول را ارسال کنم؟',
          })
        this.enableDelay();  
    }

    render() {
        return(
            <View style={{flexDirection:'column'}}>
                <Text style={{padding:10}}>{this.props.name}</Text>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity disabled={this.state.disabled} onPress={this.onClick}>
                        <View style={{marginTop : 10 ,flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <Icon type="Entypo" name="share" style={{color:"#9ca2ad", fontSize:22}}/>
                            <Text style={{color:"#9ca2ad", fontSize:12}}>اشتراک گذاری</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ActionSection;