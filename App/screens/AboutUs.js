import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  NativeModules,
} from 'react-native';
import {Icon} from 'react-native-elements';
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;
const {height, width} = Dimensions.get('window');
export function AboutUs({navigation}) {
  return (
    <View style={{height, width, marginTop: HEIGHT}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#245b96',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: height * 0.1,
        }}>
        <TouchableOpacity
          style={{paddingLeft: height * 0.01}}
          onPress={() => navigation.goBack()}>
          <Icon
            name="ios-arrow-back-circle"
            type="ionicon"
            size={height * 0.05}
            color="#fff"
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: height * 0.04,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            About Us
          </Text>
        </View>
        <View>
          
        </View>

      </View>
      <View style={{width: width, height: height * 0.8 , justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontWeight:'bold',fontSize: 22, color:'#81f', width: width, textAlign:'center'}}>
              "Love your body and let your body love you".

              </Text>
              <Text>

           <Text style={{fontSize: 19, fontWeight:'bold', width: width, textAlign:'center'}}>This is easy to use,
            amazing, and ads-free app to help you take care of your body in one
            place.</Text> 
            <Text style={{fontSize: 22, fontWeight:'bold', width: width}}>
            Features of the app - </Text>
            <Text>
                </Text> Choose category - Users can choose the
            category of the body part care you want to add details for. Add
            details - Users can add all the details of the body care, they have
            to care. View details - Users can view the details of body care that
            were added. Edit & Update details - Users can edit and update the
            details of the body care as and when required. 
              </Text>
              <Text style={{color: "#945" , fontSize: 20, fontWeight:'bold'}}>
              Download the app and take Care of your body more.

              </Text>
       
      </View>
    </View>
  );
}
