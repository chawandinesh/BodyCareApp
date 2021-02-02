import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  NativeModules,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';
import {DailyBodyCareContext} from './Context'
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;
const {height, width} = Dimensions.get('window');
export function AddDetails({navigation, route}) {
  const {state,setState} = React.useContext(
    DailyBodyCareContext
  )
  // console.log(state,setState)
  const {data} = route.params
  console.log(data,'data...props')
  const [formState, setFormState] = React.useState({
    bodyParts: '',
    careProducts: '',
    frequencyOfUse: '',
    detailsOfProduct: '',
    instructions: '',
    image: '',
  });

  const pickImage = () => {
    ImagePicker.openPicker({
      width: width * 0.3,
      height: width * 0.3,
      cropping: true,
    })
      .then((image) => {
        setFormState({...formState, image: image.path});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    // console.log(formState, state[data])
    setState({...state, [data]: [...state[data], formState]})
    setFormState({ bodyParts: '',
    careProducts: '',
    frequencyOfUse: '',
    detailsOfProduct: '',
    instructions: '',
    image: '',})
    navigation.goBack()
  }
  return (
    <KeyboardAwareScrollView style={{marginTop: HEIGHT}}> 
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#245b96',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: height * 0.1,
        }}>
        <TouchableOpacity style={{paddingLeft: height * 0.01}} onPress={()=> navigation.goBack()}>
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
            Add Details
          </Text>
        </View>
        <View>
          <TouchableOpacity style={{paddingRight: height * 0.01}}>
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: height * 0.02,
        }}>
        <View>
          <View
            style={{
              width: width * 0.3,
              borderWidth: 2,
              height: width * 0.3,
              backgroundColor: '#d4f1ff',
              borderRadius: height * 0.2,
            }}>
            <TouchableOpacity onPress={() => pickImage()}>
              {formState.image ? (
                <Image
                  source={{uri: formState.image}}
                  resizeMode="stretch"
                  style={{
                    width: width * 0.29,
                    height: width * 0.29,
                    borderRadius: height * 0.2,
                  }}
                />
              ) : (
                <Icon
                  type="ionicon"
                  name="ios-camera"
                  size={height * 0.05}
                  style={{height: width * 0.3, justifyContent: 'center'}}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: height * 0.09,
            borderRadius: 20,
            borderBottomWidth: 5,
            borderRightWidth: 3,
            borderLeftWidth: 3,
            borderWidth: 2,
            width: width * 0.95,
            marginTop: height * 0.01,
            justifyContent: 'flex-end',
            backgroundColor: '#d4f1ff',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: height * 0.02,
                backgroundColor: '#304',
                color: '#fff',
                borderRadius: height * 0.02,
                width: width * 0.4,
                textAlign: 'center',
              }}>
              Body Parts
            </Text>
          </View>
          <TextInput
            value={formState.bodyParts}
            onChangeText={(text) =>
              setFormState({...formState, bodyParts: text})
            }
            style={{
              height: height * 0.05,
              width: width * 0.9,
              borderWidth: 1,
              alignSelf: 'center',
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              backgroundColor: '#fff',
            }}
          />
        </View>
        <View
          style={{
            height: height * 0.09,
            borderRadius: 20,
            borderBottomWidth: 5,
            borderRightWidth: 3,
            borderLeftWidth: 3,
            borderWidth: 2,
            width: width * 0.95,
            marginTop: height * 0.01,
            justifyContent: 'flex-end',
            backgroundColor: '#d4f1ff',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: height * 0.02,
                backgroundColor: '#304',
                color: '#fff',
                borderRadius: height * 0.02,
                width: width * 0.4,
                textAlign: 'center',
              }}>
              Care Products
            </Text>
          </View>
          <TextInput
            value={formState.careProducts}
            onChangeText={(text) =>
              setFormState({...formState, careProducts: text})
            }
            style={{
              height: height * 0.05,
              width: width * 0.9,
              borderWidth: 1,
              alignSelf: 'center',
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              backgroundColor: '#fff',
            }}
          />
        </View>
        <View
          style={{
            height: height * 0.09,
            borderRadius: 20,
            borderBottomWidth: 5,
            borderRightWidth: 3,
            borderLeftWidth: 3,
            borderWidth: 2,
            width: width * 0.95,
            marginTop: height * 0.01,
            justifyContent: 'flex-end',
            backgroundColor: '#d4f1ff',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: height * 0.02,
                backgroundColor: '#304',
                color: '#fff',
                borderRadius: height * 0.02,
                width: width * 0.4,
                textAlign: 'center',
              }}>
              Frequency of use
            </Text>
          </View>
          <TextInput
            onChangeText={(text) =>
              setFormState({...formState, frequencyOfUse: text})
            }
            value={formState.frequencyOfUse}
            style={{
              height: height * 0.05,
              width: width * 0.9,
              borderWidth: 1,
              alignSelf: 'center',
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              backgroundColor: '#fff',
            }}
          />
        </View>
        <View
          style={{
            height: height * 0.09,
            borderRadius: 20,
            borderBottomWidth: 5,
            borderRightWidth: 3,
            borderLeftWidth: 3,
            borderWidth: 2,
            width: width * 0.95,
            marginTop: height * 0.01,
            justifyContent: 'flex-end',
            backgroundColor: '#d4f1ff',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: height * 0.02,
                backgroundColor: '#304',
                color: '#fff',
                borderRadius: height * 0.02,
                width: width * 0.4,
                textAlign: 'center',
              }}>
              Details of product
            </Text>
          </View>
          <TextInput
            onChangeText={(text) =>
              setFormState({...formState, detailsOfProduct: text})
            }
            value={formState.detailsOfProduct}
            style={{
              height: height * 0.05,
              width: width * 0.9,
              borderWidth: 1,
              alignSelf: 'center',
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              backgroundColor: '#fff',
            }}
          />
        </View>
        <View
          style={{
            height: height * 0.15,
            borderRadius: 20,
            borderBottomWidth: 5,
            borderRightWidth: 3,
            borderLeftWidth: 3,
            borderWidth: 2,
            width: width * 0.95,
            marginTop: height * 0.01,
            justifyContent: 'flex-end',
            backgroundColor: '#d4f1ff',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: height * 0.03,
                backgroundColor: '#304',
                color: '#fff',
                borderRadius: height * 0.02,
                width: width * 0.4,
                textAlign: 'center',
              }}>
              Instructions
            </Text>
          </View>
          <TextInput
            multiline
            numberOfLines={4}
            onChangeText={(text) =>
              setFormState({...formState, instructions: text})
            }
            value={formState.instructions}
            style={{
              height: height * 0.1,
              width: width * 0.9,
              borderWidth: 1,
              alignSelf: 'center',
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              backgroundColor: '#fff',
            }}
          />
        </View>
        <View style={{marginTop: height * 0.02}}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              width: width * 0.8,
              height: height * 0.08,
              backgroundColor: '#96b7eb',
              borderRadius: height * 0.1,
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: height * 0.04, fontWeight: 'bold'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
