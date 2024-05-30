import React, { useEffect } from 'react';
import { View,TextInput,StyleSheet, Alert,ActivityIndicator,MD2Colors } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { addMember, transferMoney, updateUserAmount, userHoldStatus } from '../httprequest/admin';
import { useSelector } from 'react-redux';
import store from '../../state';
import auth, { authActions } from '../../state/auth-slice/auth-slice';
export default function HoldMember({setVisibleHold}) {
    const [userHoldDetails,setUserHoldDetails] = React.useState({});
    const isLoading = useSelector(state => state.auth.isLoading);
   
    const update_user = async()=>{
        store.dispatch(authActions.setLoading(true));
        await userHoldStatus(userHoldDetails);
        store.dispatch(authActions.setLoading(false));
        setVisibleHold(false);
    }
    return (
    <View style={{gap: 10}}>
        <TextInput onChangeText={text=>setUserHoldDetails({...userHoldDetails,phone:text})} style={styles.inputCont} placeholder="Enter Phone" />
        <Button onPress={update_user} mode="contained" style={{marginTop: 10}}>
          Hold {isLoading && <ActivityIndicator animating={true} color='red' />}
        </Button>
        <Button mode="contained" onPress={() => setVisibleHold(false)}>
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