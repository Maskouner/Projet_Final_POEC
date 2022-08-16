import { StyleSheet, Text, ScrollView ,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Card, Searchbar, Avatar, Paragraph } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import { useIsFocused } from '@react-navigation/native'

const AcceuilScreen = () => {
  const navigation = useNavigation()
  const [docteur,setDocteur] = useState([])
  const espace = " "
  const getDocteur = async function ()  {
    const docteur2 = await firestore().collection('Docteur').get()
    return docteur2
  }

  const datainit = async () => {
    await getDocteur().then(getDocteur => {
      setDocteur(getDocteur.docs)
      console.log(getDocteur.docs)
    })
  }
  
  const isFocused = useIsFocused()

  useEffect(() => {
    datainit()
  },[isFocused],
  )
  
  return (
    <ScrollView style={styles.container}>
      <Searchbar placeholder="Rechercher"/>
      {docteur.map ((docteur,index) => (
        <Card style={{marginTop:10}}>
        <Card.Title 
        title={docteur._data.prenom+espace+docteur._data.nom}
        titleStyle={{color:'#00A6FF'}}
        subtitle={docteur._data.specialiter}
        subtitleStyle={{fontWeight:'bold', color:'#000000',fontSize:15}}
        left={(props) => <Avatar.Icon {...props} icon='human' size={45}/>}/>
        <Card.Content style={{left:55}}>
          <Paragraph>{docteur._data.adresse}</Paragraph>
          <Paragraph>{docteur._data.codePostal+espace+docteur._data.ville}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity style={{left:20}} onPress={() => navigation.navigate('RendezVous', {DR: docteur._data.prenom+espace+docteur._data.nom,Spe:docteur._data.specialiter})}>
             <Text style={{color:'#FFFFFF',borderWidth:2,backgroundColor:'#00A6FF',borderColor:'#00A6FF',fontSize:15}}>Prendre Rendez-Vous</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
      ))}
      
    </ScrollView>
  )
}

export default AcceuilScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  },

})

/*
<Card style={{marginTop:10}}>
        <Card.Title 
        title="Dr Pascal Rifflart" 
        titleStyle={{color:'#00A6FF'}}
        subtitle="Medecin Generaliste" 
        subtitleStyle={{fontWeight:'bold', color:'#000000',fontSize:15}}
        left={(props) => <Avatar.Image {...props} source={{uri : "https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_1024,h_700,c_limit/hsrhyrocwq2jtvjmmblt.jpg"}} size={45}/>}/>
        <Card.Content style={{left:55}}>
          <Paragraph>14 Rue Jean Marc Laurent</Paragraph>
          <Paragraph>80090 Amiens</Paragraph>
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity style={{left:20}} onPress={() => navigation.navigate('RendezVous', {DR: "Dr Pascal Riflart",Image : 'https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_1024,h_700,c_limit/hsrhyrocwq2jtvjmmblt.jpg'})}>
             <Text style={{color:'#FFFFFF',borderWidth:2,backgroundColor:'#00A6FF',borderColor:'#00A6FF',fontSize:15}}>Prendre Rendez-Vous</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>

      <Card style={{marginTop:10}}>
        <Card.Title 
        title="Dr Anthony NAKACHE" 
        titleStyle={{color:'#00A6FF'}}
        subtitle="Medecin Generaliste" 
        subtitleStyle={{fontWeight:'bold', color:'#000000',fontSize:15}}g
        left={(props) => <Avatar.Image {...props} source={{uri : 'https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_1024,h_700,c_limit/f3imvngjuvy8cjh2mngn.jpg'}} size={45}/>}/>
        <Card.Content style={{left:55}}>
          <Paragraph>8 Rue Saint-Patrice</Paragraph>
          <Paragraph>80000 Amiens</Paragraph>
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity style={{left:20}} onPress={() => navigation.navigate('RendezVous', {DR: "Dr Anthony NAKACHE",Image : 'https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_1024,h_700,c_limit/f3imvngjuvy8cjh2mngn.jpg'})}>
             <Text style={{color:'#FFFFFF',borderWidth:2,backgroundColor:'#00A6FF',borderColor:'#00A6FF',fontSize:15}}>Prendre Rendez-Vous</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card> 
      */