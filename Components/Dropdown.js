import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Appcolors, fontFamily, metrices} from '../Constants';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const DropdownComponent = ({
  height,
  width,
  onChange,
  dropdownHeight,
  Data,
  value,
  placeholder,
  image,
  placeholderPadding,
  dropdownPosition,
  
}) => {
  const [focus,setFocus]=useState(false);
  const styles = StyleSheet.create({
    dropdown: {
      height: height,
      width: width,
      backgroundColor: Appcolors.backgroundColor,
      justifyContent: 'flex-start',
      borderBottomWidth:1,
      borderColor:focus==true?Appcolors.heading:Appcolors.grey,
    },
    placeholderStyle: {
      fontSize: 14,
      marginTop: height/3,
     justifyContent:'center',
      color:Appcolors.grey2,
      fontFamily:fontFamily.metropolisSemibold,
      paddingLeft:placeholderPadding?placeholderPadding:0,
    },
    selectedTextStyle: {
      fontSize: 18,
      color: Appcolors.heading,
      marginTop: 12,
      fontFamily: fontFamily.metropolisSemibold,
      paddingLeft:placeholderPadding?placeholderPadding:0,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color: Appcolors.heading,
    },
    icon:{
      height:22,
      width:22,
      marginTop:height/3.5,
      marginRight:metrices.windowWidth*0.05
    }
  });
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      onFocus={()=>setFocus(true)}
      onBlur={()=>setFocus(false)}
      data={Data ? Data : data}
      search
      maxHeight={dropdownHeight?dropdownHeight:250}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Search..."
      value={value}
      onChange={onChange}
      dropdownPosition={dropdownPosition?dropdownPosition:'bottom'}
      containerStyle={{
        backgroundColor:Appcolors. backgroundColor,
        borderWidth: 1,
        borderColor: Appcolors.grey,
        borderRadius:5
      }}
      renderRightIcon={() => {
        return(
         image? <Image source={image} style={styles.icon}/>:null)
      }}
      itemContainerStyle={{
        borderWidth: 1,
        borderColor: Appcolors.grey,
        marginVertical: 2,
        backgroundColor: Appcolors.backgroundColor,
      }}
      itemTextStyle={{color:Appcolors.heading}}
      activeColor={Appcolors.grey}
    />
  );
};

export default DropdownComponent;
