import {StyleSheet} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  input: {
    height: hp(6),
    backgroundColor: '#ededed',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: wp(95),
  },
  button: {
    backgroundColor: '#679df5',
    height: hp(6),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{color: 'white', fontSize: 17, fontWeight: '600'},
  toggleMainView:{
    // backgroundColor: 'red',
    width: wp(95),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  toggleView:{
    backgroundColor: '#ededed',
    height: hp(2.8),
    width: wp(15),
    borderRadius: 10,
    flexDirection: 'row',
  },
  toggleButton:{width: wp(7.6),
    height: hp(3),
    borderRadius: 15,},
    safeAreaView:{padding: 10, backgroundColor: 'white', flex: 1},
    headerView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 40,
      },
      imageView:{
        backgroundColor: '#ededed',
        width: wp(95),
        height: hp(13),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 15,
      },
      imageButton:{justifyContent: 'center', alignItems: 'center'}
});
