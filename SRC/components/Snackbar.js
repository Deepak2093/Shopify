import {Alert} from 'react-native';
import Snackbar from 'react-native-snackbar';

export const SnackBar = message => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    textColor: 'green',
    action: {
      // text: 'Show',
      textColor: 'green',
      onPress: () => {
        Alert.alert('USER DATA', 'Enter Correct User ID');
      },
    },
  });
};
