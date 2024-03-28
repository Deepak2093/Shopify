import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Linking,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {styles} from './Style';
import Icon from 'react-native-vector-icons/Feather';
import Ico from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../Redux/UserSilce';
const EditScreen = ({route}) => {
  const dispatch = useDispatch();
  const {myAddress} = route.params;

  const {email, location, isActive, phone, name, id} = route.params.data;
  console.log('edit this-->', myAddress);
  const [button, setButton] = useState(true);
  const [button1, setButton1] = useState(false);
  const [myName, setMyName] = useState(name ? name : ' ');
  const [address, setAddress] = useState(myAddress ? myAddress : ' ');
  const [myEmail, setMyEmail] = useState(email ? email : ' ');
  const [number, setNubmer] = useState(phone ? phone : ' ');
  const [active, setActive] = useState(isActive ? isActive : false);

  console.log(active);
  const navigation = useNavigation();
  const change = () => {
    setButton(true);
    setButton1(false);
    setActive(false);
  };
  const change1 = () => {
    setButton(false);
    setButton1(true);
    setActive(true);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View
        style={styles.headerView}>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ico name="arrow-back" size={25} color="#2c78f2" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 26,
            color: '#2c78f2',
            fontWeight: '500',
            marginLeft: 10,
          }}>
          Update Shopkeeper Info
        </Text>
      </View>
      <Text>Neque porro quisquam est qui dolorem ipsum quia</Text>
      <TextInput
        value={myName}
        onChangeText={text => {
          setMyName(text);
        }}
        style={[styles.input, {marginTop: hp(4)}]}
        placeholder="Name"
      />
      <TextInput
        value={address}
        onChangeText={text => {
          setAddress(text);
        }}
        style={styles.input}
        placeholder="Address"
      />
      <TextInput
        value={myEmail}
        onChangeText={text => {
          setMyEmail(text);
        }}
        style={styles.input}
        placeholder="Email address"
      />
      <TextInput
        value={number}
        onChangeText={text => {
          setNubmer(text);
        }}
        style={styles.input}
        placeholder="phone number"
      />

      <View
        style={styles.imageView}>
        <TouchableOpacity
          style={styles.imageButton}>
          <Icon name="upload" color={'#2c78f2'} size={20} />
          <Text style={{color: '#2c78f2'}}>Update Image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.toggleMainView}>
        <Text style={{fontSize: 16, fontWeight: '600'}}>Status</Text>
        <View style={styles.toggleView}>
          <TouchableOpacity onPress={change}>
            <View
              style={[
                styles.toggleButton,
                {backgroundColor: button == true ? '#2c78f2' : 'transparent'},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={change1}>
            <View
              style={[
                styles.toggleButton,
                {backgroundColor: button1 == true ? '#2c78f2' : 'transparent'},
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: hp(10)}} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // navigation.navigate('shop')
          dispatch(
            updateUser({
              id: id,
              email: myEmail,
              name: myName,
              phone: number,
              location: address,
              isActive: active,
            }),
          );
          navigation.goBack();
        }}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditScreen;
