import React, { useEffect } from 'react';
import { View,TextInput,StyleSheet, Alert,ActivityIndicator,MD2Colors } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { addMember, updateUserAmount } from '../httprequest/admin';
import { useSelector } from 'react-redux';
import store from '../../state';
import auth, { authActions } from '../../state/auth-slice/auth-slice';
export default function AddAmount({setVisibleAmount}) {
    const [amountDetails,setAmountDetails] = React.useState({});
    const isLoading = useSelector(state => state.auth.isLoading);
    const update_amount = async()=>{
        store.dispatch(authActions.setLoading(true));
        await updateUserAmount(amountDetails);
        store.dispatch(authActions.setLoading(false));
        setVisibleAmount(false);
    }
    return (
    <View style={{gap: 10}}>
        <TextInput onChangeText={text=>setAmountDetails({...amountDetails,phone:text})} style={styles.inputCont} placeholder="Enter ID/Phone" />
        <TextInput onChangeText={text=>setAmountDetails({...amountDetails,association_code:text})} style={styles.inputCont} placeholder="Enter association code" />
        <TextInput onChangeText={text=>setAmountDetails({...amountDetails,amount:text})} style={styles.inputCont} placeholder="Enter Amount" />
        <TextInput onChangeText={text=>setAmountDetails({...amountDetails,extra:text})} style={styles.inputCont} placeholder="Enter Extra Amount" />
        <Button onPress={update_amount} mode="contained" style={{marginTop: 10}}>
          Add Amount {isLoading && <ActivityIndicator animating={true} color='red' />}
        </Button>
        <Button mode="contained" onPress={() => setVisibleAmount(false)}>
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