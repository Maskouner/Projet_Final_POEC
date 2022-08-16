import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const FirstPageScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{justifyContent:'center',flex:1}}>
      <Text style={{alignSelf:'center',fontWeight:'bold', color:'#000000',fontSize:30,marginBottom:20}}>Projet Final</Text>
      <TouchableOpacity style={{alignSelf:'center'}} onPress={() => navigation.navigate('Connexion')}>
        <Text style={{color:'#FFFFFF',borderWidth:2,backgroundColor:'#00A6FF',borderColor:'#00A6FF',fontSize:25}}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignSelf:'center',marginTop:30}} onPress={() => navigation.navigate('Inscription')}>
        <Text style={{color:'#FFFFFF',borderWidth:2,backgroundColor:'#00A6FF',borderColor:'#00A6FF',fontSize:25}}>Inscription</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignSelf:'center',marginTop:30}} onPress={() => navigation.navigate('Santer')}>
        <Text style={{color:'#000000',fontSize:15}}>Vous êtes professionel de santé ? </Text>
      </TouchableOpacity>
    </View>
  )
}

export default FirstPageScreen

const styles = StyleSheet.create({})