import React from 'react';
import {TextInput, Button, Text} from 'react-native-paper';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const Singup = ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.singup}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <View style={styles.TextContainer}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Text
                  style={{color: '#ffff', fontFamily: 'Nunito Sans'}}
                  variant="displaySmall">
                  Join Our
                </Text>
                <Text
                  style={{color: '#EB5939', fontFamily: 'Nunito Sans'}}
                  variant="displaySmall">
                  Community
                </Text>
              </View>
              <View>
                <Text style={{color: '#ffff'}} variant="titleSmall">
                  Connect with like minded people and expert in your field
                </Text>
              </View>
              <View style={styles.loginTextInputContainer}>
                <TextInput
                  mode="outlined"
                  placeholder="Enter your name"
                  placeholderTextColor="#FFFFFF99"
                  textColor="#FFFFFF99"
                  style={styles.textInput}
                />
                <TextInput
                  mode="outlined"
                  placeholder="Email"
                  placeholderTextColor="#FFFFFF99"
                  textColor="#FFFFFF99"
                  style={styles.textInput}
                />
                <TextInput
                  mode="outlined"
                  placeholder="Enter your password"
                  placeholderTextColor="#FFFFFF99"
                  textColor="#FFFFFF99"
                  style={styles.textInput}
                />
                <TextInput
                  mode="outlined"
                  placeholder="confirm password"
                  placeholderTextColor="#FFFFFF99"
                  textColor="#FFFFFF99"
                  style={styles.textInput}
                />
              </View>
              <View style={{width: '90%', marginTop: 10}}>
                <Button
                  mode="contained"
                  textColor="#FFFFFF"
                  buttonColor="#EB5939"
                  style={{height: 40, justifyContent: 'center'}}>
                  Singup
                </Button>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text variant="titleSmall" style={{color: '#FFFFFF'}}>
                  Already have an Account?
                </Text>
                <Button
                  onPress={() => {
                    navigation.navigate('login');
                  }}
                  mode="text"
                  textColor="#EB5939">
                  Login
                </Button>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
                <View>
                  <Text
                    style={{width: 50, textAlign: 'center', color: 'white'}}>
                    or
                  </Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
              </View>
              <View style={styles.Oauth}>
                <TouchableOpacity style={styles.iconContainer}>
                  <Image
                    style={styles.loginIcon}
                    source={require('../assests/google.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                  <Image
                    style={styles.loginIcon}
                    source={require('../assests/facebook.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                  <Image
                    style={styles.loginIcon}
                    source={require('../assests/apple.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  singup: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    gap: 10,
  },
  Oauth: {
    height: '100px',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  loginIcon: {
    width: 24,
    height: 24,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#1F1F1F',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  TextContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextInputContainer: {
    width: '90%',
    gap: 15,
  },
  textInput: {
    backgroundColor: '#1F1F1F',
    color: '#FFFFFF',
    height: 40,
    borderRadius: 10,
  },
});
export default Singup;
