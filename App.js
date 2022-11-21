import React from 'react';
import { Text, View, Image, StyleSheet, Animated, Easing  } from 'react-native';
import {ModelView} from 'react-native-gl-model-view';
import {model} from './android/app/src/main/assets/test.png';


const AnimatedModelView = Animated.createAnimatedComponent(ModelView);

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
      }}>
      {/* <Animated.ModelView 
          model={model}
          
          style={styles.container}
      /> */}
       {/* <Animated.Image
             key={'image-${index}'}
             source={require('./android/app/src/main/assets/test.png')}
              
             
             /> */}
      <Text>test</Text>
    </View>
  )
}
export default HelloWorldApp;


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
