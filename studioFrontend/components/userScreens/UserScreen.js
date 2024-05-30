import React, { useEffect } from 'react';
import {Text, Button, TextInput} from 'react-native-paper';
import {Image, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { useSelector } from 'react-redux';
export default function UserScreen() {

  const current_user = useSelector(state => state.user.currentUser);

  return (
    <>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.userContainer}>
        <Text style={{color:'#f26622'}} variant='displayMedium'>{current_user.user.studio_name}</Text>
        <Text style={{color:'white',fontWeight:'bold'}} variant='displaySmall'>ID : {current_user.user.uid}</Text>
        <View style={{height:350,width:'90%'}}>
          <View style={{height:'70%',position:'relative'}}>
          <Image source={{
            uri:'https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?rs=1&pid=ImgDetMain'
          }} style={styles.profile}/>
        </View>
          <View style={styles.profileTextCont}>
              <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}} variant='titleLarge'>{current_user.user.username}</Text>
              <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}} variant='titleLarge'>nominee: {current_user.user.nominee}</Text>
              <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}} variant='titleMedium'>{current_user.user.role}</Text>
          </View>
        </View>
        <View>
          <View style={styles.profileInfoCard}>
            <FontAwesome6 name="phone-volume" size={40} color="#EB5939" />
            <Text style={{color:'white'}} variant='titleLarge'>+91 {current_user.user.phone}</Text>
          </View>
          
          <View style={styles.dashedLine} />
          <View style={styles.profileInfoCard}>
            <FontAwesome6 name="location-dot" size={40} color="#EB5939" />
            <View>
            <Text style={{color:'white'}} variant='titleLarge'>{current_user.user.studio_name}</Text>
            <Text style={{color:'white'}} variant='titleLarge'>Vi:{current_user.user.village}</Text>
            <Text style={{color:'white'}} variant='titleLarge'>Dist:{current_user.user.district},{current_user.user.state}.</Text>
            <Text style={{color:'white'}} variant='titleLarge'>Pin:{current_user.user.pincode}</Text>
            </View>
          </View>
          <View style={styles.dashedLine} />
          <View style={styles.profileInfoCard}>
            <FontAwesome6 name="indian-rupee-sign" size={40} color="#EB5939" />
            <View>
            <Text style={{color:'white'}} variant='titleLarge'>{current_user.user.amount}/-</Text>
            </View>
          </View>
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
