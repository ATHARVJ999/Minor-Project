import React from 'react';
import {View} from 'react-native';
import { Appcolors ,metrices} from '../Constants';

const ProgressBar=({length1,length2})=>{
    return(
        <View
        style={{
          width: metrices.windowWidth * 0.861,
          height: metrices.windowWidth * 0.0187,
          flexDirection:'row',
          alignSelf:'center',
        }}>
            <View style={{
                width: length1,
                height: metrices.windowWidth * 0.0187,
                backgroundColor:Appcolors.button,
            }}></View>
            <View style={{
                width: length2,
                height: metrices.windowWidth * 0.0187,
                backgroundColor:Appcolors.button,
                opacity:0.08
            }}></View>
        </View>
    );
}
export default ProgressBar;