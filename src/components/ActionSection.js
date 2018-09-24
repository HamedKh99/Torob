import React , {Component} from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import { Icon } from 'native-base';


const ActionSection = (props) => {
    return(
        <View style={{flexDirection:'column'}}>
            <Text style={{padding:10}}>{props.name}</Text>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity>
                    <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <Icon type="Entypo" name="share" style={{color:"#9ca2ad", fontSize:22}}/>
                        <Text style={{color:"#9ca2ad", fontSize:12}}>اشتراک گذاری</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ActionSection;