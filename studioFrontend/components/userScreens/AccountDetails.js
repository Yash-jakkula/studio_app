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
import React from 'react';
const AdminChanges = () => {
  const data = [
    {
      name: '12/04/2024',
      studio: 'Telangana State Organisation',
      village: 'Telangana',
      Phone: '9441713062',
      amount: 200,
    },
    {
      name: '15/04/2024',
      studio: 'District Association',
      village: 'Mulugu',
      Phone: '9392344262',
      amount: 200,
    },
    {
      name: '12/04/2024',
      studio: 'Telangana State Organisation',
      village: 'Telangana',
      Phone: '9441713062',
      amount: 200,
    },
    {
      name: '15/04/2024',
      studio: 'District Association',
      village: 'Mulugu',
      Phone: '9392344262',
      amount: 200,
    },
  ];

  return (
    <>
      <View style={styles.Dashboard}>
        <View>
          <View style={styles.cardCont}>
            <View style={{height: '100%', width: '100%'}}>
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <TouchableOpacity>
                    <View style={styles.userContainer}>
                      <View
                        style={{
                          marginRight: 10,
                        }}
                      />
                      <View style={{flex: 2, gap: 3}}>
                        <Text style={styles.dashText}>{item.name}</Text>
                        <Text style={styles.dashText}>{item.studio}</Text>
                        <Text style={styles.dashText}>
                          {item.village} {item.Phone}
                        </Text>

                        {/* <Button
                                onPress={() => navigation.navigate('Profile')}
                                mode="contained"
                                style={{width: 100, color: 'white'}}>
                                more
                              </Button> */}
                      </View>
                      <View>
                        <Text style={styles.dashText}>
                          Paid : {item.amount}/-
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
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
          <Text variant="titleSmall" style={{color: 'white', fontSize: 20}}>
            T:2000
          </Text>
          <Text variant="titleSmall" style={{color: 'white', fontSize: 20}}>
            B:1000
          </Text>
          <Text variant="titleSmall" style={{color: 'white', fontSize: 20}}>
            Ex:1000
          </Text>
        </View>
      </View>
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
