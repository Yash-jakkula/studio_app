import React from 'react';
import {Text, Button, TextInput} from 'react-native-paper';
import {Image, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
export default function UserScreen() {
  return (
    <>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.userContainer}>
        <Text style={{color:'#f26622'}} variant='displayMedium'>Sada Photo Studio</Text>
        <Text style={{color:'white',fontWeight:'bold'}} variant='displaySmall'>ID:MLG 001</Text>
        <View style={{height:350,width:'90%'}}>
          <View style={{height:'70%',position:'relative'}}>
          <Image source={require('../assests/profile.jpeg')} style={styles.profile}/>
        </View>
          <View style={styles.profileTextCont}>
              <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}} variant='titleLarge'>Jakkula Yashwanth</Text>
              <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}} variant='titleMedium'>photographer</Text>
          </View>
        </View>
        <View>
          <View style={styles.profileInfoCard}>
            <FontAwesome6 name="phone-volume" size={40} color="#EB5939" />
            <Text style={{color:'white'}} variant='titleLarge'>+91 9441713062</Text>
          </View>
          
          <View style={styles.dashedLine} />
          <View style={styles.profileInfoCard}>
            <FontAwesome6 name="location-dot" size={40} color="#EB5939" />
            <View>
            <Text style={{color:'white'}} variant='titleLarge'>Sada photo studio,Sbi road</Text>
            <Text style={{color:'white'}} variant='titleLarge'>Vi:Mulugu,Mandal,Mulugu.</Text>
            <Text style={{color:'white'}} variant='titleLarge'>Dist:Mulugu,Telangana.</Text>
            <Text style={{color:'white'}} variant='titleLarge'>Pin:506343</Text>
            </View>
          </View>
          <View style={styles.dashedLine} />
        </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#38383E'
  },
  profile:{
    height:'100%',
    width:'100%',
    objectFit:'contain',
    borderRadius:10,
  },
  profileTextCont:{
    backgroundColor:'#f26622',
    position:'absolute',
    width:"100%",
    top:'62%',
    padding:20,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  profileInfoCard:{
    flexDirection:'row',
    alignItems:'center',
    gap:20,
    marginBottom:20
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderStyle: 'dashed',
    marginVertical: 10,
  },
});
