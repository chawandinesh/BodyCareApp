import React from 'react';
import {
  View,
  Text,
  Dimensions,
  NativeModules,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {DailyBodyCareContext} from './Context'
const {height, width} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;
export function CategoriesScreen({navigation}) {
  const {state,setState} = React.useContext(DailyBodyCareContext)
  const dataItems = Object.keys(state).sort()
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: height * 0.01,
        }}>
        <View
          style={{
            height: height * 0.15,
            width: width * 0.85,
            // alignSelf: 'flex-end',
            flexDirection: 'row',
            borderRadius: height * 0.02,
            backgroundColor: '#e6f7ff',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 3,
            marginTop: height * 0.01,
            marginBottom: height * 0.03,
          }}>
          <View
            style={{
              height: height * 0.14,
              width: width * 0.53,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
              {item}
            </Text>
          </View>
          <View
            style={{
              width: width * 0.3,
              height: height * 0.15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/hey.png')}
              resizeMode="stretch"
              style={{
                width: width * 0.3,
                height: height * 0.14,
                borderTopRightRadius: 40,
                borderBottomRightRadius: 40,
              }}
              //   height={height * 0.15}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('ShowDetails', {data: item})}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: height * 0.15,
            width: width * 0.15,
          }}>
          <Icon
            type="ionicon"
            name="ios-arrow-redo-sharp"
            size={height * 0.05}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{height: height, width: width}}>
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
            Categories
          </Text>
        </View>
        <View>
          <Text> </Text>
        </View>
      </View>

      <View style={{marginBottom: height * 0.11}}>
        <FlatList
          data={dataItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
