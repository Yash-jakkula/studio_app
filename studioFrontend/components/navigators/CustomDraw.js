import React from 'react';
import { Text } from 'react-native-paper';
import {View, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { userLogout } from '../httprequest/auth';
import { useSelector } from 'react-redux';
const CustomDrawerContent = ({navigation}) => {
// current_user state
const current_user = useSelector(state => state.user.currentUser);

// local state to validate the role of the user.
// to hide the admin screen from normal user
  const [role,setRole] = React.useState(current_user.user.role);

// active state to show the active btn color 
const [active,setActive] = React.useState('t1');
  
// navigation function as per the user request screen name
  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
  };

// user logout function
const logout = async() => {
  console.log('...loading');
  await userLogout();
  console.log('logout succefull');
  navigation.replace('login');
}



  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.container}>
      <View style={styles.drawContent}>
      <TouchableOpacity style={active === 't1' && styles.activeBtn} onPress={() => navigateToScreen('MyProfile')}>
        <View style={styles.drawBtn}>
        <Image source={{
          uri:'https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?rs=1&pid=ImgDetMain'
        }} style={{width:50,height:50}}/>
        <Text variant='titleMedium' style={[styles.drawerItem]}>{current_user.user.username}</Text>
        </View>
      </TouchableOpacity>
      </View><View style={styles.drawContent}>
      <TouchableOpacity onPress={() => navigateToScreen('DashboardPublic')}>
        <View style={styles.drawBtn}>
          <FontAwesome6 name="house" size={20} color="green" />
          <View style={{justifyContent:'space-between',flexDirection:'row',flex:1,alignItems:'center',marginRight:20}}>
        <Text variant='titleMedium' style={[styles.drawerItem]}>Dashboard</Text>
        <FontAwesome6 name="greater-than" size={15} color="green"/>
        </View>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.drawContent}>
      <TouchableOpacity onPress={() => navigateToScreen('AdminChanges')}>
        <View style={styles.drawBtn}>
        <FontAwesome6 name="user-group" size={20} color="green" />
        <View style={{justifyContent:'space-between',flexDirection:'row',flex:1,alignItems:'center',marginRight:20}}>
        <Text variant='titleMedium' style={[styles.drawerItem]}>KBP A/c Details</Text>
        <FontAwesome6 name="greater-than" size={15} color="green"/>
        </View>
        </View>
        </TouchableOpacity>
      </View>

{role === 'admin' && 
      <View style={styles.drawContent}>
      <TouchableOpacity onPress={() => navigateToScreen('Admin')}>
        <View style={styles.drawBtn}>
          <FontAwesome6 name="user-tie" size={20} color="green" />
          <View style={{justifyContent:'space-between',flexDirection:'row',flex:1,alignItems:'center',marginRight:20}}>
        <Text variant='titleMedium' style={[styles.drawerItem]}>Admin</Text>
        <FontAwesome6 name="greater-than" size={15} color="green"/>
        </View></View>
        </TouchableOpacity>
      </View>
}

    </View>
      
      <View style={{margin:20}}>
      <TouchableOpacity onPress={logout}>
        <View style={styles.drawBtn}>
          <FontAwesome6 name="right-from-bracket" size={20} color="green" />
        <Text variant='titleMedium' style={[styles.drawerItem]}>Logout</Text>
        </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },
  drawContent:{
    marginBottom:40,
    paddingLeft:15

  },
  drawBtn:{
    flexDirection:'row',
    alignItems:'center',
    gap:20
  },
});

export default CustomDrawerContent;
