import React from 'react';
import {SafeAreaView} from 'react-native';
import AuthScreenNav from './components/navigators/AuthScreenNav';
import {NavigationContainer} from '@react-navigation/native';
import Nav from './components/userScreens/Nav';
export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <AuthScreenNav />
      </NavigationContainer>
    </SafeAreaView>
  );
}
