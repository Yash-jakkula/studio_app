import {Text, TextInput, Button, Portal, Modal} from 'react-native-paper';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AddMember from './addMember';
import AddAmount from './addAmount';
import TransferAmount from './transferAmount';
import { activeUsers } from '../httprequest/admin';
import TransferDetails from './transferDetailsScreen';
import HoldMember from './holdMember';
const Admin = () => {
  const [visibleMember, setVisibleMember] = React.useState(false);
  const [visibleAmount, setVisibleAmount] = React.useState(false);
  const [visibleTranser, setVisibleTransfer] = React.useState(false);
  const [visiblebtn, setVisiblebtn] = React.useState(false);
  const [visibleHold, setVisibleHold] = React.useState(false);
  const hideVisiblebtn = () => setVisiblebtn(false);
  const hideModalTransfer = () => setVisibleTransfer(false);
  const hideModalAmount = () => setVisibleAmount(false);
  const hideModal = () => setVisibleMember(false);
  const hideModalHold = () => setVisibleHold(false);
  const showModal = () => setVisibleMember(false);
  const [activeCount,setActiveCount] = React.useState(1);
  const transferRequest = async()=>{
      const active_members = await activeUsers();
      setActiveCount(active_members);
      setVisibleTransfer(true);
  }

  return (
    <>
      <View
        style={{
          flex: 1,

          justifyContent: 'space-between',
        }}>
        <View style={styles.cardCont}>
          <TransferDetails />
        </View>
        <Portal>
          <View style={styles.plus}>
            <Button
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                justifyContent:'center',
                marginTop:"170%",
                marginLeft:"70%"
              }}
              contentStyle={{justifyContent:'center',alignItems:'center'}}
              mode="contained"
              buttonColor="#073C84"
              onPress={() => setVisiblebtn(!visiblebtn)}>
              {visiblebtn ? (
                <Text style={{color: 'white',textAlign:'center',fontSize: 25}}>X</Text>
              ) : (
                <Text style={{color: 'white', fontSize: 25,textAlign:'center'}}>+</Text>
              )}
            </Button>
          </View>
        </Portal>

        <Modal
          contentContainerStyle={styles.btnmodal}
          visible={visiblebtn}
          onDismiss={hideVisiblebtn}>
          <View style={styles.adminButtons}>
            <Button
              mode="contained"
              buttonColor="blue"
              onPress={() => setVisibleMember(true)}>
              Add member
            </Button>
            <Button
              mode="contained"
              buttonColor="green"
              onPress={() => setVisibleAmount(true)}>
              Add Amount
            </Button>
            <Button
              mode="contained"
              buttonColor="red"
              onPress={transferRequest}>
              Transfer
            </Button>
            <Button
              mode="contained"
              buttonColor="black"
              onPress={() => setVisibleHold(true)}>
              Hold member
            </Button>
          </View>
        </Modal>

        <Portal>
          
          <Modal
            visible={visibleMember}
            onDismiss={hideModal}
            contentContainerStyle={styles.containerStyle}>
           <ScrollView contentContainerStyle={{flexGrow:1}}>
            <AddMember setVisibleMember={setVisibleMember} />
            </ScrollView>
          </Modal>

          <Modal
            visible={visibleAmount}
            onDismiss={hideModalAmount}
            contentContainerStyle={styles.containerStyle}>
            <AddAmount setVisibleAmount={setVisibleAmount}/>
          </Modal>

          <Modal
            visible={visibleTranser}
            onDismiss={hideModalTransfer}
            contentContainerStyle={styles.containerStyle}>
            <TransferAmount transfer_amount={activeCount} setVisibleTransfer={setVisibleTransfer} />
          </Modal>

          <Modal
            visible={visibleHold}
            onDismiss={hideModalHold}
            contentContainerStyle={styles.containerStyle}>
            <HoldMember setVisibleHold={setVisibleHold}/>
          </Modal>
        </Portal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timeLocText: {
    color: '#FFFFFF99',
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
  timeLocationCont: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 3,
  },
  btnmodal: {
    width: 100,
    height: 400,
    marginTop: '75%',
    marginLeft: '50%',
  },
  btn: {
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  cardSubCont: {
    gap: 5,
  },
  adminButtons: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 20,
    padding: 25,
    marginBottom: 40,
    width: 200,
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

    padding: 10,
  },
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
  },
});

export default Admin;
