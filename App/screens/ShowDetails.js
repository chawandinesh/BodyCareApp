import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  NativeModules,
  Image,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {DailyBodyCareContext} from '../screens/Context';
import Empty from '../assets/empty.svg';
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;
const {height, width} = Dimensions.get('window');
export function ShowDetails({navigation, route}) {
  const {state, setState} = React.useContext(DailyBodyCareContext);
  const dataProp = 'ksj';
  const {data} = route.params;

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: width * 0.95,
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ShowData', {data: item})}
          style={{
            width: width * 0.8,
            borderBottomWidth: 6,
            borderRightWidth: 3,
            //   alignSelf: 'center',
            borderBottomRightRadius: height * 0.05,
            borderTopLeftRadius: height * 0.05,
            borderWidth: 2,
            height: height * 0.2,
            backgroundColor: '#e3ecfa',
            marginTop: height * 0.02,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: width * 0.9,
            }}>
            {item.image ? (
              <Image
                source={{uri: item.image}}
                resizeMode="stretch"
                style={{
                  width: width * 0.25,
                  borderRadius: height * 0.05,
                  height: width * 0.25,
                }}
              />
            ) : (
              <View
                style={{
                  width: width * 0.25,
                  height: width * 0.25,
                  borderRadius: height * 0.05,
                  borderWidth: 1,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'flex-start',
                }}>
                <Text>No Image</Text>
              </View>
            )}
            <View
              style={{
                justifyContent: 'center',
                width: width * 0.65,
                height: width * 0.25,
                //   alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  width: width * 0.5,
                  backgroundColor: '#efe',
                  textAlign: 'center',
                }}>
                {item.bodyParts}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: width * 0.7,
              alignSelf: 'center',
              borderRadius: 5,
              height: height * 0.05,
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                position: 'absolute',
                top: 1,
                right: 1,
                zIndex: 2,
                backgroundColor: '#3c47b0',
                paddingLeft: height * 0.02,
                paddingRight: height * 0.02,
                padding: 1,
                borderRadius: 10,
                color: '#fff',
                textAlign: 'center',
              }}>
              Care Product
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: height * 0.06,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: height * 0.03}}>
                {item.careProducts}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            setState({
              ...state,
              [data]: state[data].filter((e) => e.bodyParts !== item.bodyParts),
            })
          }
          style={{
            width: width * 0.2,
            height: height * 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="ios-trash-sharp"
            type="ionicon"
            color="darkred"
            size={height * 0.04}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{height, width}}>
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
            Body Care
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{paddingRight: height * 0.01}}
            onPress={() => navigation.navigate('AddDetails', {data: data})}>
            <Icon
              name="ios-add-circle-sharp"
              type="ionicon"
              size={height * 0.05}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
      {state[data].length ? (
        <View style={{paddingBottom: height * 0.1}}>
          <FlatList
            data={state[data]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      ) : (
        <View
          style={{
            backgroundColor: '#f5fcff',
            marginTop: HEIGHT,
            height: height * 0.9,
            width: width,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Empty height={height * 0.2} width={width * 0.7} />

          <View
            style={{
              padding: height * 0.03,
              borderWidth: 2,
              backgroundColor: '#fff',
              borderRadius: height * 0.05,
              borderBottomWidth: height * 0.01,
              borderRightWidth: height * 0.005,
              borderLeftWidth: height * 0.005,
              margin: width * 0.05,
            }}>
            <Text style={{fontSize: height * 0.04, fontWeight: 'bold'}}>
              Nothing to show, Please Click on '+' to add items
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
