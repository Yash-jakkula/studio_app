/* eslint-disable prettier/prettier */
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useContext, useEffect} from 'react';
import {Button,ActivityIndicator,MD2Colors} from 'react-native-paper';
import {StyleSheet,TextInput, View, Image,Alert, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Text} from 'react-native-paper'
import { userLogin, userLogout } from '../httprequest/auth';
import store from '../../state';
import auth, { authActions } from '../../state/auth-slice/auth-slice';
function Login({navigation}) {
const dispatch = useDispatch();


const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
const isLoading = useSelector(state=>state.auth.isLoading);
const [credentials,setCredentials] = React.useState({
    phone:'',
    password:'',
  });

  useEffect(()=>{
    if(isLoggedIn){
      dispatch(authActions.setLoading(false));
      navigation.replace('Draw');
    }
  },[isLoggedIn])

const User = async()=>{ 
  dispatch(authActions.setLoading(true)); 
  await userLogin({phone:credentials.phone,password:credentials.password});
  dispatch(authActions.setLoading(false));
}

 
      // const {success,token} = await fetchUser(credentials);
      // console.log(token);

      // const userinfo = await currentUser(token);
      // console.log('userinfo',userinfo);
      // setUser({...user,token:token,success:success,role:userinfo[0].role,
      // name:userinfo[0].name,id:userinfo[0]._id,location:userinfo[0].location,seats:userinfo[0].seats});
      // console.log('user',user);
      // if (token){
      //   dispatch(userActions.setUserToken(token));
      //   navigation.replace('Home');
      // }
      // else {
      //    Alert.alert('please enter valid details');
      // }
   


  return (
    
      <ScrollView contentContainerStyle={{flexGrow:1,justifyContent:'center'}}>
    
      <View style={stylesheet.container}>
        <View style={stylesheet.ImageContainer}>
          <Image
            style={stylesheet.image}
            source={require('../assests/Logo.png')}
          />
          <Text variant='titleLarge'>District PhotoGraphers Association</Text>
        </View>
        <View style={stylesheet.LoginContainer}>
          <TextInput
            placeholder='Mobile Number'
            style={stylesheet.textInput}
            onChangeText={(text) => setCredentials({...credentials,phone:text})}
          />
          <TextInput
            placeholder='Password'
            style={stylesheet.textInput}  
            onChangeText={(text)=>setCredentials({...credentials,password:text})}
          />

          <View style={stylesheet.buttoncont}>
            <Button
              onPress={User}            
              contentStyle={{height: 50}}
              mode="contained"
              buttonColor="#00C2FF"
              textColor="white">
              Singup with mobile
              {isLoading && <ActivityIndicator animating={true} color={MD2Colors.red800} />}
            </Button>

          </View>
          
          <Text style={{textAlign:'center',marginTop:20}}>By clicking Singup, you agree to our Terms of Service and Privacy Policy</Text>
        </View>
        
      </View>
      </ScrollView>
    );
}

const stylesheet = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flex:1,
    
  },
  ImageContainer: {
    flex:1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    marginTop:50,
    
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
    marginBottom:10
  },
  LoginContainer: {
    width: '90%',
    flex:1,
    margin: 10,
    gap: 5,
  },
  textInput: {
    borderRadius: 30,
    borderWidth:0.5,
    paddingLeft:20,
    marginBottom:10,
    height:40
     },
  buttoncont: {
    height: '200px',
    width: '200px',
    marginTop: 10,
    gap: 10,
  },
});

export default Login;
