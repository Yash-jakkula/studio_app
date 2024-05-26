import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text, TextInput} from 'react-native-paper';
const Nav = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          justifyContent: 'space-between',
          backgroundColor: '#073C84',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
        }}>
        <View
          style={{
            marginLeft: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            width: '70%',
          }}>
          <View style={{height: '100%'}}>
            <Image
              source={require('../assests/Logo.png')}
              style={styles.navImages}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('DashboardPublic')}>
            <View>
              <Text style={{color: 'white', fontSize: 18}}>
                District PhotoGraphers Association
              </Text>
              <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
                Kutumbha Bharosa Pathakam
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.headerCont}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={require('../assests/burger.png')}
              style={styles.navImages}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  headerCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    width: '20%',
  },
  navImages: {
    width: 34,
    height: 34,
  },
});
export default Nav;
