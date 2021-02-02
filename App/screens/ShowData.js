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
export function ShowData({navigation, route}) {
  const {data} = route.params;
  console.log(data, 'data...');
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
            Daily body care
          </Text>
        </View>
        <View>
          <Text> </Text>
        </View>
      </View>

      <View
        style={{
          height: height * 0.9,
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: height * 0.7,
            width: width * 0.8,
            alignSelf: 'center',
            borderWidth: 2,
          }}>
          <View
            style={{
              width: width * 0.3,
              height: width * 0.3,
              borderWidth: 1,
              marginTop: 4,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {data.image ? (
              <Image
                source={{uri: data.image}}
                resizeMode="stretch"
                style={{width: width * 0.3, height: width * 0.3}}
              />
            ) : (
              <Text>No Image</Text>
            )}
          </View>

          <View
            style={{
              width: width * 0.75,
              height: height * 0.3,
              padding: 4,
              alignSelf: 'center',
              marginTop: height * 0.02,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                margin: 5,
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: height * 0.025, fontWeight: 'bold'}}>
                Body Parts :
              </Text>
              <Text style={{fontSize: height * 0.025}}>
                {data.bodyParts ? data.bodyParts : `None`}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                margin: 5,
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: height * 0.025, fontWeight: 'bold'}}>
                Care Products :
              </Text>
              <Text style={{fontSize: height * 0.025}}>
                {data.careProducts ? data.careProducts : `None`}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                margin: 5,
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: height * 0.025, fontWeight: 'bold'}}>
                Frequency of use :
              </Text>
              <Text style={{fontSize: height * 0.025}}>
                {data.frequencyOfUse ? data.frequencyOfUse : `None`}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                margin: 5,
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: height * 0.025, fontWeight: 'bold'}}>
                Details of Product :
              </Text>
              <Text style={{fontSize: height * 0.025}}>
                {data.detailsOfProduct ? data.detailsOfProduct : `None`}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                margin: 5,
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: height * 0.025, fontWeight: 'bold'}}>
                Instructions :
              </Text>
            </View>
            <View style={{padding: 4}}>
              <Text style={{fontSize: height * 0.025}}>
                {data.instructions ? data.instructions : `null`}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
