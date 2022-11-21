import React from 'react';
import { Text, View, Image, StyleSheet, Animated, Easing } from 'react-native';
import { ModelView } from 'react-native-gl-model-view';
// import {model} from './android/app/src/main/assets/test.png';

// const burger = Asset.fromModule(require('../android/app/src/main/assets/Hamburger.obj'));
// const skin = Asset.fromModule(require('../android/app/src/main/assets/Hamburger.png'));

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
          key={'image-${index}'}
             source={require('./android/app/src/main/assets/Hamburger.obj')}
          
          style={styles.container}
      /> */}
      <Image
        key={'image-${index}'}
        source={require('../android/app/src/main/assets/test.png')}


      />



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
