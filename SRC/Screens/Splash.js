import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation=useNavigation();
   useEffect(()=>{

     setTimeout(() => {
        navigation.navigate('Home')
      }, 3000);

   },[])
  return (
    <View style={{justifyContent:'center',alignItems:'center',
    flex:1
    }}>
      {/* <Text style={{fontSize:30}}></Text> */}
      <Image source={require('../asset/gog.gif')}  style={{
        height:hp(40),width:wp(80),borderRadius:30,alignSelf:'center',
      }}/>
 </View>
  )
}

export default Splash