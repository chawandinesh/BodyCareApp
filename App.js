import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigation from './App/routes/navigation'
import {Context} from './App/screens/Context'
import {HomeScreen, CategoriesScreen, ShowDetails,AddDetails, ViewDetails, ShowData} from './App/screens'
const App = () => {
  return (
    <Context>
      <StatusBar barStyle="dark-content" />
      <Navigation/>
      {/* <ShowDetails /> */}
    </Context>
  );
};
export default App;
