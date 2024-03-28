import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import EditScreen from '../Screens/EditScreen';
import Splash from '../Screens/Splash';
import EmployeData from '../Json/data.json';
import {addUsers} from '../Redux/UserSilce';
import Home from '../Screens/ListingScreen/Home';

const Stack = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    EmployeData.map(item => {
      dispatch(addUsers(item));
    });
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="edit"
          component={EditScreen}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
