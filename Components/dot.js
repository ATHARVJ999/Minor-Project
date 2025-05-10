import React from "react";
import {View} from 'react-native';
import Appcolors from "../Constants/Appcolors";
import metrices from "../Constants/metrices";

export default dot=({size,isActive})=>{
    return (
        <View
          style={{
            height:size?size: metrices.windowWidth * 0.02133,
            width: size?size:metrices.windowWidth * 0.02133,
            borderRadius:size?size/2: (metrices.windowWidth * 0.02133) / 2,
            backgroundColor:isActive?Appcolors.button:Appcolors.grey,
          }}></View>
    )
}