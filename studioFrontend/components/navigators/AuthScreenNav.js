import {createStackNavigator} from '@react-navigation/stack';
import Login from '../authscreens/Login';
import React from 'react';
import Singup from '../authscreens/Singup';
import DrawNav from './DrawNav';
import {IconButton} from 'react-native-paper';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Profile from '../userScreens/Profile';
import Nav from '../userScreens/Nav';
const AuthStack = createStackNavigator();

const AuthScreenNav = () => {
  const navigation = useNavigation();

  return (
    <AuthStack.Navigator initialRouteName="login">
      <AuthStack.Screen
        name="Draw"
        component={DrawNav}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Singup"
        component={Singup}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#38383E'},
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthScreenNav;
