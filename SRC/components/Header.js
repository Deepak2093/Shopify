import { View, Text ,Image,TouchableOpacity,StyleSheet} from 'react-native'

import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const CustomHeader = ({count}) => {
  const navigation=useNavigation()
  return (

    <View style={styles.mainView}>
        <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',
         }}>
        <Image source={require("../asset/app.jpg")} style={{height:hp(6),
          width:wp(10),
          borderRadius:10
          }  } />
        <Text style={{fontSize:23,color:'#000',fontWeight:'700',marginLeft:10
         }}>Shopify</Text></View>
         </View>  )
}

export default CustomHeader
const styles= StyleSheet.create({ 
  mainView:{backgroundColor:'#b5f7c1',
  height:hp(7),
  width:'100%',flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'
}
})