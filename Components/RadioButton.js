import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Appcolors, fontFamily} from '../Constants';

const RadioButton = ({onPress, Label, Pressed}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <View
      style={{
        height: 19,
        flexDirection: 'row',
        alignItems: 'center',
        width: 95,
      }}>
      <TouchableOpacity
        onPress={onPress}
        //onPressIn={()=>{setIsActive(Pressed)}}
        style={{
          height: 19,
          width: 19,
          borderRadius: 19 / 2,
          borderWidth: 1,
          borderColor: Appcolors.button,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 17 / 2,
            backgroundColor: Pressed === true ? Appcolors.button : null,
          }}></View>
      </TouchableOpacity>
      <Text
        style={{
          marginLeft: 10,
          fontSize: 16,
          fontFamily: fontFamily.metropolisSemibold,
          color: Appcolors.heading,
        }}>
        {Label}
      </Text>
    </View>
  );
};
export default RadioButton;
