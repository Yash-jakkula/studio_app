import React, { useEffect } from 'react';
import { View,TextInput,StyleSheet, Alert,ActivityIndicator,MD2Colors } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { addMember, transferMoney, updateUserAmount } from '../httprequest/admin';
import { useSelector } from 'react-redux';
import store from '../../state';
import auth, { authActions } from '../../state/auth-slice/auth-slice';
export default function TransferAmount({setVisibleTransfer,transfer_amount}) {
    const [amountDetails,setAmountDetails] = React.useState({});
    const isLoading = useSelector(state => state.auth.isLoading);
    useEffect(()=>{
      setAmountDetails({...amountDetails,amount:(transfer_amount*10)});
    },[transfer_amount])
    const update_amount = async()=>{
        store.dispatch(authActions.setLoading(true));
        await transferMoney(amountDetails);
        store.dispatch(authActions.setLoading(false));
        setVisibleTransfer(false);
    }
    return (
    <View style={{gap: 10}}>
        <TextInput onChangeText={text=>setAmountDetails({...amountDetails,phone:text})} style={styles.inputCont} placeholder="Enter ID/Phone" />
        <TextInput value={amountDetails.amount} onChangeText={text=>setAmountDetails({...amountDetails,amount:text})} style={styles.inputCont} placeholder={`amount to transfer : ${amountDetails.amount}`} />
        <TextInput onChangeText={text=>setAmountDetails({...amountDetails,association_name:text})} style={styles.inputCont} placeholder="Enter association name" />
        <Button onPress={update_amount} mode="contained" style={{marginTop: 10}}>
          Transfer Amount {isLoading && <ActivityIndicator animating={true} color='red' />}
        </Button>
        <Button mode="contained" onPress={() => setVisibleTransfer(false)}>
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