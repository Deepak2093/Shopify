import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Linking,
  Alert,
  Modal,
} from 'react-native';
import { styles } from './style';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ico from 'react-native-vector-icons/SimpleLineIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SnackBar} from '../../components/Snackbar';
import {useDispatch, useSelector} from 'react-redux';
import {removeUser} from '../../Redux/UserSilce';
const Home = () => {
  const [modal, seModal] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const [addresses, setAddresses] = useState({});

  const data = useSelector(state => state.users);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    fetchAddresses();
  }, [data]);
  const fetchAddresses = async () => {
    const newAddresses = {};
    for (let item of data) {
      const address = await getAddressFromLatLng(item.latitude, item.longitude);
      newAddresses[item.id] = address;
    }
    setAddresses(newAddresses);
  };
  const getId = itemId => {
    seModal(true);
    setDeleteId(itemId);
  };

  const getAddressFromLatLng = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
      );
      const data = response.data;
      const address = data.display_name;
      console.log('Address:', address);
      return address;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  const renderItem = ({item}) => {
    // let city=getAddressFromLatLng(item.latitude,item.longitude)
    // console.log("deepak--->",city)
    return (
      <View style={styles.flatlistView}>
        <Image
          source={{uri: item.img}}
          style={styles.image}
          resizeMode="contain"
        />
        <View
          style={[
            styles.flatInside,
            {backgroundColor: item.isActive == true ? 'green' : 'red'},
          ]}
        />
        <View
          style={{
            paddingLeft: 10,
          }}>
          <View
            style={styles.cardTopTextView}>
            <Text style={{color: 'black', fontSize: 16}}>{item.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                  // Alert.alert('Do you really want to delete this user')
                  getId(item.id);
                }}>
                <Icon name="delete-outline" size={18} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.touch, {backgroundColor: '#b1c4e3'}]}
                onPress={() => {
                  navigation.navigate('edit', {
                    data: item,
                    myAddress: addresses[item.id],
                  });
                }}>
                <Icon name="pencil-outline" size={18} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(item.location);
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ico name="location-pin" />
              <Text style={styles.text} numberOfLines={1}>
                {addresses[item.id] || 'Fetching address...'}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.iconView}>
            <Icon name="email-box" />
            <Text style={{marginLeft: 5}}>{item.email}</Text>
          </View>
          <View style={styles.iconView}>
            <Icon name="phone-outline" />
            <Text style={{marginLeft: 5}}>{item.phone}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <CustomHeader />
      <View style={styles.mainView}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
      <Modal visible={modal} transparent animationType="slide">
        <View
          style={styles.modalView}>
          <Text style={{fontSize: 18, color: 'black'}}>
            Do you really want to remove this user?
          </Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              dispatch(removeUser({id: deleteId}));
              seModal(false);
              SnackBar('User Deleted Succesfully');
            }}>
            <Text style={{color: 'white'}}>Remove User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modalButton,{marginTop:8,backgroundColor:"white"}]}
            onPress={() => seModal(false)}>
            <Text style={{color: 'black', fontSize: 18}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={{height: 10}} />
    </SafeAreaView>
  );
};

export default Home;

