import React, {useState, useRef, useEffect, Ref} from 'react';
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
  Easing,
} from 'react-native';
import {Appcolors, fontFamily, metrices} from '../Constants';
const AnimatedInput = ({Label,secure,onChangeText,value,width,ref1,onSubmitEditing}) => {
  const [backcolor, setbackColor] = useState(Appcolors.grey);
 // const [value, setValue] = useState('');
  const [fsize, setFsize] = useState(16);
  const [change, setChanged] = useState(false);
  const [font,setFont]=useState(fontFamily.metropolisSemibold);

  const handleFocus = () => {
    animateTransform(-10);
    setbackColor(Appcolors.heading);
    setFsize(12);
    setFont(fontFamily.metropolisBold);
  };
  const handleBlur = () => {
   // console.log('val',values.length);
    if (change ) {
      if(value.length==0){
        animateTransform(20);
        setbackColor(Appcolors.grey);
        setFsize(16);
        setFont(fontFamily.metropolisSemibold)
      }
      else{
      animateTransform(-10);
      setbackColor(Appcolors.grey);
      setFsize(12);
      setFont(fontFamily.metropolisBold)
      }
    }
    
     else if(change==false) {
      animateTransform(20);
      setbackColor(Appcolors.grey);
      setFsize(16);
      setFont(fontFamily.metropolisSemibold)
    }
  };
  const animateTransform = (toValue) => {
    Animated.timing(transY.current, {
      toValue,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };
  const transY = useRef(new Animated.Value(20));

  const styles = StyleSheet.create({
    Container: {
      height: metrices.windowWidth * 0.12,
      width:width?width: metrices.windowWidth * 0.83,
      alignSelf: 'center',
    },
    title: {},
    form: {backgroundColor: 'white'},
    input: {
      marginTop:-10,
      height:40,
      color: Appcolors.heading,
      fontSize: 16,
      lineHeight:18,
      fontFamily: fontFamily.metropolisSemibold,
    },
    label: {
      color: Appcolors.grey2,
      fontFamily: font,
      fontSize:fsize,
      zIndex: -15,
    },
    view:{
    }
  });

  return (
    <View style={styles.Container}>
      <Animated.View style={[styles.view,{transform: [{translateY: transY.current}]}]}>
        <Animated.Text style={styles.label}>{Label}</Animated.Text>
      </Animated.View>
      <TextInput
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        autoComplete="off"
        secureTextEntry={secure}
        onPress={(txt)=>{setChanged(true)}}
        value={value}
        ref={ref1}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={'next'}
     
      />
      <View
        style={{
          height: 1,
          width: width ? width : metrices.windowWidth * 0.83,
          backgroundColor: backcolor,

        }}></View>
    </View>
  );
};


export default AnimatedInput;
