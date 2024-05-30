import {
  Text,
  TextInput,
  Searchbar,
  Card,
  Button,
  ProgressBar,
  MD3Colors,
  Icon,
} from 'react-native-paper';
import {useState} from 'react'
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import React from 'react';
import TransferDetails from '../AdminScreens/transferDetailsScreen';
import { useSelector } from 'react-redux';
import { account_details } from '../httprequest/admin';
const AdminChanges = () => {
  const account_details = useSelector(state => state.account_details.account);

  const [refreshing, setRefreshing] = useState(false);


  return (
    <>
      {account_details && (
        <View style={styles.Dashboard}>
          <View style={{marginBottom:90}}>
            <View style={styles.cardCont}>
              <TransferDetails />
            </View>
          </View>
          <View />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 10,
              position: 'absolute',
              top: '90%',
              width: '100%',
              backgroundColor: '#073C84',
              padding: 30,
              borderWidth: 1,
            }}>
            <Text variant="titleSmall" style={{ color: 'white', fontSize: 20 }}>
              T:{account_details.account_details.total}
            </Text>
            <Text variant="titleSmall" style={{ color: 'white', fontSize: 20 }}>
              Ex:{account_details.account_details.extra}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  timeLocText: {
    color: '#FFFFFF99',
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  timeLocationCont: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 3,
  },
  cardSubCont: {
    gap: 5,
  },
  adminButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  progressBar: {
    height: 10,
    borderRadius: 10,
  },
  cardImage: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
  },
  Dashboard: {
    backgroundColor: 'white',
    flex: 1,
  },
  dashText: {
    color: 'black',
  },
  textCont: {
    paddingLeft: 20,
    gap: 10,
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#1E1E1E',
    width: 200,
    height: 240,
    padding: 10,
  },
  EventCard: {
    backgroundColor: '#1E1E1E',
    width: 200,
    height: 200,
    padding: 10,
  },
  cardCont: {
    flexDirection: 'row',
    gap: 5,
    padding: 10,
  },
});

export default AdminChanges;

