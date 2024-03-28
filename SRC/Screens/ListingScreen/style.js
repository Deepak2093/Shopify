import {

    StyleSheet,
   
  } from 'react-native';
  import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    touch1: {
      height: 50,
      width: 240,
      alignSelf: 'center',
      backgroundColor: 'skyblue',
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    cardTopTextView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp(75),
        
      },
     iconView: {flexDirection: 'row', alignItems: 'center'},
    text: {color: 'skyblue', marginLeft: 5, textAlign: 'left'},
    touch: {
      padding: 5,
      backgroundColor: 'pink',
      borderRadius: 6,
      marginRight: 10,
    },
    flatlistView: {
      backgroundColor: 'white',
      width: wp(100),
      marginBottom: 8,
      flexDirection: 'row',
      padding: 5,
      borderRadius: 10,
    },
    image: {
      height: hp(7),
      width: wp(15),
      borderRadius: 10,
      backgroundColor: 'pink',
    },
    flatInside: {
      height: hp(2.3),
      width: wp(3.9),
      position: 'absolute',
      borderRadius: 10,
      top: hp(6),
      left: wp(14),
    },
    mainView: {
      paddingHorizontal: 8,
      marginTop: 8,
      backgroundColor: '#ededed',
    },
    modalButton:{
        backgroundColor: 'black',
        height: hp(5),
        width: wp(30),
        borderRadius: 8,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      modalView:{
        height: hp(21),
        width: wp(75),
        alignSelf: 'center',
        top: hp(35),
        borderRadius: 10,
        padding: 12,
        elevation: 5,
        backgroundColor: 'white',
      }
  });