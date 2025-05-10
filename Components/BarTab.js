import React from 'react';
import {Text, View} from 'react-native';
import {Appcolors, fontFamily, metrices} from '../Constants';

const BarTab = ({data, value1, value2}) => {
  const widthFactor = parseFloat(value1 / value2);
  const Width = metrices.windowWidth * 0.33;
  return (
    <View
      style={{
        width: metrices.windowWidth * 0.77,
        height: metrices.windowWidth * 0.06,
        flexDirection: 'row',
        alignSelf: 'center',
       marginVertical:8
      }}>
      <View
        style={{
          width: metrices.windowWidth * 0.224,
          height: metrices.windowWidth * 0.06,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: fontFamily.metropolis,
            fontSize: 10,
            color: Appcolors.heading,
          }}>
          {data}
        </Text>
      </View>
      <View
        style={{
          width: metrices.windowWidth * 0.44,
          height: metrices.windowWidth * 0.06,
         marginLeft:5,
         justifyContent:'center',
        }}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <View
            style={{
              width: Width*widthFactor,
              height: 6,
              backgroundColor: Appcolors.Progress2,
              marginRight: 10,
            }}></View>
          <Text
            style={{
              fontFamily: fontFamily.metropolis,
              fontSize: 10,
              color: Appcolors.Progress2,
            }}>
            {value1}
          </Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <View
            style={{
              width: Width,
              height: 6,
              backgroundColor: Appcolors.Progress1,
              marginRight: 10,
            }}></View>
          <Text
            style={{
              fontFamily: fontFamily.metropolis,
              fontSize: 10,
              color: Appcolors.heading,
            }}>
            {value2}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default BarTab;
