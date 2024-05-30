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
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserDetailsCard from './uesrDetialsCard';
import SearchComponent from '../helpers/loaders/searchComponent';
import store from '../../state';
import { useContext } from 'react';
import { searchActions } from '../../state/search-item/search-item';
import { Context } from '../context/OrderContext';
export default function DashBoardEnrolled({navigation}) {
  const users = useSelector(state => state.user.users);
  const {setSearchItem,searchItem} = React.useContext(Context);
  
  return (
    <>
      <View style={styles.Dashboard}>
        <View>
          <Searchbar placeholder="Search" onChangeText={(text)=>setSearchItem(text)} style={{margin: 10}} />
          <View style={styles.textCont}>
            <Text style={styles.dashText} variant="labelLarge">
              Profiles
            </Text>
          </View>

          <View style={styles.cardCont}>
            <View style={{height: '100%', width: '100%'}}>
              {searchItem.length === 0 ? <UserDetailsCard /> : <SearchComponent /> }
            </View>
          </View>
        </View>
        <View />
      </View>
    </>
  );
}

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
