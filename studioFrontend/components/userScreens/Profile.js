import React, { useEffect } from 'react';
import {Text, Button, TextInput} from 'react-native-paper';
import {Image, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { useSelector } from 'react-redux';
export default function Profile(){
  const users = useSelector(state=>state.user.users);
  const route = useRoute();
  const {id} = route.params;
  const [user,setUser] = React.useState(users.filter((item) => item._id === id));
  return (
    <>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.userContainer}>
        <Text style={{color:'#f26622',textAlign:'center'}} variant='displaySmall'>{user[0].studio_name.toUpperCase()}</Text>
        <Text style={{color:'white',fontWeight:'bold'}} variant='displaySmall'>ID:{user[0].uid}</Text>
        <View style={{height:350,width:'90%'}}>
          <View style={{height:'70%',position:'relative'}}>
          <Image source={{
            uri:'https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?rs=1&pid=ImgDetMain'
          }} style={styles.profile}/>
        </View>
          <View style={styles.profileTextCont}>
              <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}} variant='headlineLarge'>{user[0].username}</Text>
              <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}} variant='headlineMedium'>{user[0].role}</Text>
          </View>
        </View>
        <View>
          <View style={styles.profileInfoCard}>
            <FontAwesome6 name="phone-volume" size={40} color="white" />
            <Text style={{color:'white'}} variant='titleLarge'>+91 {user[0].phone}</Text>
          </View>
          
          <View style={styles.dashedLine} />
          <View style={styles.profileInfoCard}>
            <FontAwesome6 name="location-dot" size={40} color="white" />
            <View>
            <Text style={{color:'white'}} variant='titleLarge'>{user[0].studio_name}</Text>
            <Text style={{color:'white'}} variant='titleLarge'>Vi: {user[0].village}</Text>
            <Text style={{color:'white'}} variant='titleLarge'>Dist:{user[0].district}, {user[0].state}.</Text>
            <Text style={{color:'white'}} variant='titleLarge'>Pin:{user[0].pincode}</Text>
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
