import React from 'react';
import {
  View,
  Text,
  Dimensions,
  NativeModules,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MobileNeed from '../assets/mobileneed.svg';
const {height, width} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;
const WIDTH = 20;
// console.log(height, width, HEIGHT, WIDTH);
export function HomeScreen({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/mainimage.png')}
      style={{height: height, width: width}}>
      <View style={{flex: 2, alignItems: 'flex-end', justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: height * 0.05,
            color: '#fff',
            backgroundColor: 'black',
            padding: 5,
            borderWidth: 2,
            width: width * 0.8,
            textAlign: 'right',
            borderTopLeftRadius: height * 0.1,
            borderBottomLeftRadius: height * 0.1,
            borderRightWidth: 0,
            borderColor: '#f86',
          }}>
          Daily Body Care
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          marginTop: -height * 0.1,
          borderRadius: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CategoriesScreen')}
          style={{
            width: width * 0.6,
            alignItems: 'center',
            backgroundColor: '#de782f',
            height: height * 0.08,
            borderBottomWidth: 4,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            justifyContent: 'center',
            marginBottom: height * 0.02,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: height * 0.037,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Add Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewDetails')}
          style={{
            width: width * 0.6,
            alignItems: 'center',
            backgroundColor: '#de782f',
            height: height * 0.08,
            borderBottomWidth: 4,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            justifyContent: 'center',
            marginBottom: height * 0.02,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: height * 0.037,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            View Details
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('AboutUs')}
          style={{
            width: width * 0.6,
            alignItems: 'center',
            backgroundColor: '#de782f',
            height: height * 0.08,
            borderBottomWidth: 4,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: height * 0.037,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            About Us
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
