import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Card, Searchbar, Avatar, Paragraph } from 'react-native-paper'

const AcceuilScreen = () => {
  return (
    <View style={styles.container}>
      <Searchbar placeholder="Rechercher"/>
      <Card style={{marginTop:10}}>
        <Card.Title 
        title="Dr Pascal Rifflart" 
        titleStyle={{color:'#00A6FF'}}
        subtitle="Medecin Generaliste" 
        subtitleStyle={{fontWeight:'bold', color:'#000000',fontSize:15}}
        left={(props) => <Avatar.Image {...props} source={{uri : 'https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_1024,h_700,c_limit/hsrhyrocwq2jtvjmmblt.jpg'}} size={45}/>}/>
        <Card.Content style={{left:55}}>
          <Paragraph>14 Rue Jean Marc Laurent</Paragraph>
          <Paragraph>80090 Amiens</Paragraph>
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity style={{left:20}}>
             <Text style={{color:'#FFFFFF',borderWidth:2,backgroundColor:'#00A6FF',borderColor:'#00A6FF',fontSize:15}}>Prendre Rendez-Vous</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>

      <Card style={{marginTop:10}}>
        <Card.Title 
        title="Dr Anthony NAKACHE" 
        titleStyle={{color:'#00A6FF'}}
        subtitle="Medecin Generaliste" 
        subtitleStyle={{fontWeight:'bold', color:'#000000',fontSize:15}}
        left={(props) => <Avatar.Image {...props} source={{uri : 'https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_1024,h_700,c_limit/f3imvngjuvy8cjh2mngn.jpg'}} size={45}/>}/>
        <Card.Content style={{left:55}}>
          <Paragraph>8 Rue Saint-Patrice</Paragraph>
          <Paragraph>80000 Amiens</Paragraph>
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity style={{left:20}}>
             <Text style={{color:'#FFFFFF',borderWidth:2,backgroundColor:'#00A6FF',borderColor:'#00A6FF',fontSize:15}}>Prendre Rendez-Vous</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
      
    </View>
  )
}

export default AcceuilScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  },

})