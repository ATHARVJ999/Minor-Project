import * as React from 'react';
import {Dimensions, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { metrices,Appcolors,fontFamily } from '../Constants';
import Dot from './dot';

export default Index = ({data}) => {
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <View style={{marginLeft:15,}}>
      {/* <View> */}
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={data}
          pagingEnabled={true}
          scrollAnimationDuration={7000}
          enabled={true}
          onSnapToItem={index => setCurrentIndex(index)}
          style={{alignSelf:'center',justifyContent:'center',
                height: metrices.windowWidth * 0.38,
                width: metrices.windowWidth * 0.82,}}
          renderItem={({item, index}) => (
            <View
              style={{
                height: metrices.windowWidth * 0.384,
                width: metrices.windowWidth * 0.82,
                alignSelf: 'center',
               // backgroundColor:'yellow',
              }}>
              <Text
                style={{
                  lineHeight: 48,
                  fontFamily: 'Metropolis-Bold',
                  color: Appcolors.heading,
                  fontSize: 40,
                }}>
                {item[0]}
              </Text>
              <Text
                style={{
                  lineHeight: 48,
                  fontFamily: 'Metropolis-Bold',
                  color: Appcolors.heading,
                  fontSize: 40,
                }}>
                {item[1]}
              </Text>
              <Text
                style={{
                  lineHeight: 48,
                  fontFamily: 'Metropolis-Bold',
                  color: Appcolors.heading,
                  fontSize: 40,
                }}>
                {item[2]}
              </Text>
            </View>
          )}
        />
      {/* </View> */}
      <View
        style={{
          marginTop: metrices.windowHeight * 0.23,
          flexDirection: 'row',
          width: metrices.windowWidth * 0.15,
          justifyContent: 'space-between',
        }}>
        <Dot isActive={currentIndex==0} />
        <Dot isActive={currentIndex===1} />
        <Dot isActive={currentIndex===2} />
      </View>
    </View>
  );
};
