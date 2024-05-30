import React, { useEffect } from 'react';
import { View,TextInput,StyleSheet, Alert,ActivityIndicator,MD2Colors } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { addMember } from '../httprequest/admin';
import { useSelector } from 'react-redux';
import store from '../../state';
import { authActions } from '../../state/auth-slice/auth-slice';
export default function AddMember({setVisibleMember}) {
    const isLoading = useSelector(state => state.auth.isLoading);
    const [userDetails,setUserDetails] = React.useState({});
    const createUser = async() => {
        if(userDetails){
            store.dispatch(authActions.setLoading(true));
            const user_result = await addMember(userDetails);
            if(user_result){
                store.dispatch(authActions.setLoading(false));
                setVisibleMember(false);
                Alert.alert('User created',"User created Succesfully");
            }
            else{
                Alert.alert('request failed please try again later');
            }
        }
    }
    
    return (
        <View style={{gap: 10}}>
              <TextInput onChangeText={text=>setUserDetails({...userDetails,uid:text})} style={styles.inputCont} placeholder="Enter ID" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,phone:text})} style={styles.inputCont} placeholder="Enter Phone" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,username:text})} style={styles.inputCont} placeholder="Enter user name" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,association_name:text})} style={styles.inputCont} placeholder="Enter association name" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,association_code:text})} style={styles.inputCont} placeholder="Enter association code" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,studio_name:text})} style={styles.inputCont} placeholder="Enter studio name" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,role:text})} style={styles.inputCont} placeholder="Enter Designation" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,nominee:text})} style={styles.inputCont} placeholder="Enter Nominee" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,village:text})} style={styles.inputCont} placeholder="Enter Village" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,district:text})} style={styles.inputCont} placeholder="Enter District" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,state:text})} style={styles.inputCont} placeholder="Enter State" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,pincode:text})} style={styles.inputCont} placeholder="Enter pin" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,dob:text})} style={styles.inputCont} placeholder="Enter DOB DD/MM/YYYY" />              
              <TextInput onChangeText={text=>setUserDetails({...userDetails,amount:text})} style={styles.inputCont} placeholder="Enter initial amount" />
              <TextInput onChangeText={text=>setUserDetails({...userDetails,extra:text})} style={styles.inputCont} placeholder="Enter Extra Amount" />
              <Button onPress={()=>createUser()} mode="contained" style={{marginTop: 10}}>
                Add member  {isLoading && <ActivityIndicator animating={true} color='red' />}
              </Button>
              <Button mode="contained" onPress={() => setVisibleMember(false)}>
                Cancel
              </Button>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputCont:{
        borderRadius:40,
        borderWidth:1,
        paddingLeft:20
    }
});