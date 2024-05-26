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
export default function DashBoardEnrolled({navigation}) {
  const data = [
    {
      name: 'Jakkula Sada nandam',
      studio: 'Sada Digital Studio',
      village: 'Mulugu',
      Phone: '9441713062',
    },
    {
      name: 'Kandula Ravi',
      studio: 'Niranjan Digital Studio',
      village: 'Mulugu',
      Phone: '9392344262',
    },
  ];
  return (
    <>
      <View style={styles.Dashboard}>
        <View>
          <Searchbar placeholder="Search" style={{margin: 10}} />
          <View style={styles.textCont}>
            <Text style={styles.dashText} variant="labelLarge">
              Profiles
            </Text>
          </View>

          <View style={styles.cardCont}>
            <View style={{height: '100%', width: '100%'}}>
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}>
                    <View style={styles.userContainer}>
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
                        <Text style={styles.dashText}>Balance : 500/-</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
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
