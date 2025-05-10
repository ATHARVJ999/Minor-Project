import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { fontFamily,Appcolors,metrices } from '../Constants';

export default dot = ({
  height,
  width,
  isDisabled,
  label,
  onPress,
  style,
  fontSize,
}) => {
  const styles = StyleSheet.create({
    comp: {
      height: height ? height : metrices.windowWidth * 0.128,
      width: width ? width : metrices.windowWidth * 0.8293,
      borderRadius: height ? height / 2 : (metrices.windowWidth * 0.128) / 2,
      backgroundColor: Appcolors.button,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text: {
      lineHeight: fontSize ? fontSize + 2 : 16,
      fontFamily: fontFamily.metropolisBold,
      color: Appcolors.heading,
      fontSize: fontSize ? fontSize : 14,
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.comp, style]}>
      <Text style={styles.Text}>{label}</Text>
    </TouchableOpacity>
  );
};
