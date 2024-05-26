import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput, Button, Icon, Appbar, Text} from 'react-native-paper';
import Login from '../authscreens/Login';
import Singup from '../authscreens/Singup';
import Nav from '../userScreens/Nav';
import DashBoardEnrolled from '../userScreens/DashBoardEnrolled';
import Profile from '../userScreens/Profile';
import AdminChanges from '../userScreens/AccountDetails';
import UserScreen from '../userScreens/UserScreen';
import Admin from '../AdminScreens/Admin';
import CustomDrawerContent from './CustomDraw';
const Drawer = createDrawerNavigator();

const userrole = 'admin';

const DrawNav = () => {
  return (
    <Drawer.Navigator initialRouteName="DashboardPublic" drawerContent={props => <CustomDrawerContent {...props}/>}>
      <Drawer.Screen
        name="MyProfile"
        component={UserScreen}
        options={{
          headerShown: true,
          title: 'My Profile',
          headerStyle: {backgroundColor: 'black'},
          header: () => <Nav />,
        }}
      />

      <Drawer.Screen
        name="DashboardPublic"
        component={DashBoardEnrolled}
        options={{
          headerShown: true,
          title: 'Dashboard',
          headerStyle: {backgroundColor: 'black'},
          header: () => <Nav />,
        }}
      />
      <Drawer.Screen
        name="AdminChanges"
        component={AdminChanges}
        options={{
          headerShown: true,
          title: 'KBP A/c Details',
          headerStyle: {backgroundColor: 'black'},
          header: () => <Nav />,
        }}
      />
      {userrole === 'admin' && (
        <Drawer.Screen
          name="Admin"
          component={Admin}
          options={{
            headerShown: true,
            title: 'Admin',
            headerStyle: {backgroundColor: 'black'},
            header: () => <Nav />,
          }}
        />
      )}
    </Drawer.Navigator>
  );
};

export default DrawNav;
