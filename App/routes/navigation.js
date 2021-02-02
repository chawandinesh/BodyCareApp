import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AddDetails,
  CategoriesScreen,
  HomeScreen,
  ShowData,
  ShowDetails,
  ViewDetails,
  AboutUs
} from '../screens';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddDetails" component={AddDetails} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen name="ShowData" component={ShowData} />
        <Stack.Screen name="ShowDetails" component={ShowDetails} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} />
        <Stack.Screen name="AboutUs" component={AboutUs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
