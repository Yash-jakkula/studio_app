import { ServerContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, StyleSheet,TouchableOpacity,Image,FlatList } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import React from 'react';
import { Context } from '../../context/OrderContext';
import { useNavigation } from '@react-navigation/native';
export default function SearchComponent({Content}) {
   const navigation = useNavigation();
    const users = useSelector(state => state.user.users);
    const [filterData,setFilteredData] = React.useState([]);
   const {searchItem} = React.useContext(Context)
   useEffect(()=>{
    if(searchItem){
    const regex = new RegExp(searchItem, 'i');
    const filteredUsers = users.filter(item => regex.test(item.username) 
    || regex.test(item.studio_name) 
    || regex.test(item.district));
    
    setFilteredData(filteredUsers);
  
    }
   },[searchItem])
    return (
    <View style={{height: '100%', width: '100%'}}>
        {filterData && 
        filterData.map((item) => (
            <TouchableOpacity
            onPress={() => navigation.navigate('Profile',{id:item._id})}>
            <View key={item._id} style={styles.userContainer}>
              <View style={{marginRight: 10, flexDirection: 'row'}}>
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?rs=1&pid=ImgDetMain',
                  }}
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 50,
                  }}
                />
              </View>
              <View style={{flex: 2, gap: 3}}>
                <Text style={styles.dashText}>{item.username}</Text>
                <Text style={styles.dashText}>{item.studio_name}</Text>
                <Text style={styles.dashText}>
                  {item.village},{item.phone}
                </Text>
              </View>
              <View>
                <Text style={[item.amount>0 ? {color:'green'} : {color:'red'}]}>Balance : {item.amount}/-</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
    
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 20,
        borderBottomWidth: 1,
        paddingBottom: 10,
      },
});