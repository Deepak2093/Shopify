
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import  React from 'react';
import { Provider} from 'react-redux';
import { mystore } from './SRC/Redux/MyStore';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import Stack from './SRC/Navigations/Stack';
let persist=persistStore(mystore)

function App() {
  
  return (
   <Provider store={mystore}>
    <PersistGate persistor={persist}>
    <Stack/>

      </PersistGate>
 </Provider>
      
  );
}

export default App;
