import React from 'react';
import { View, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { account_details, getTransferAccountDetails } from '../httprequest/admin';
import { getAllusers } from '../httprequest/users';
import { currentUser } from '../httprequest/auth';
export default function TransferDetails() {
const TransferDetails = useSelector(state => state.transfer_details.transferDetails);
 const [refreshing,setRefreshing] = React.useState(false);
const token = useSelector(state=>state.token.token);
 const onRefresh = async() => {
  setRefreshing(true);
  await getTransferAccountDetails();
  await account_details();
  await getAllusers();
  await currentUser(token);
  setRefreshing(false);
 }
    return (
     
    <View style={{height: '100%', width: '100%'}}>
    {TransferDetails.length !== 0 && 
    <FlatList
    refreshing={refreshing}
    onRefresh={onRefresh}
      data={TransferDetails.transferDetails}
      renderItem={({item}) => (
          <View style={styles.userContainer}>
            <View>
              <Text style={styles.dashText}>{item.association_name}</Text>
              <Text style={styles.dashText}>{item.phone}</Text>
              <Text style={styles.dashText}>{item.transfer_date.split("T")[0]}</Text>
            </View>
            <View>
              <Text style={{color:'red'}}>
                Paid : {item.amount}/-
              </Text>
            </View>
          </View>
      )}
    />
}
    
    </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 20,
        borderBottomWidth: 1,
        paddingBottom: 10,
      },
});