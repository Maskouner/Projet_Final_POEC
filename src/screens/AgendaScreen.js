import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card,Paragraph,Avatar } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'
import dayjs from 'dayjs'
import { useIsFocused } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'





const AgendaScreen = () => {
  const [rendezVous,setRendezVous] = useState([])
  const navigation = useNavigation()
  const getRendezVous = async function ()  {
    const docteur2 = await firestore().collection('RendezVous').get()
    return docteur2
  }

  const datainit = async () => {
     await getRendezVous().then(getRendezVous => {
      setRendezVous(getRendezVous.docs)
      console.log(getRendezVous.docs)
    })
  }
  
  const isFocused = useIsFocused()

  useEffect(() => {
    datainit()
  },[isFocused],
  )
  if (rendezVous=='') {
    return(
      <View style={styles.container2}>
        <Text style={styles.Titre2}>Vous n'avez pas de rendez-vous</Text>
        <TouchableOpacity style={{alignSelf:'center'}} onPress={() => navigation.navigate('FirstPage')}>
             <Text style={{color:'#FFFFFF',borderWidth:2,backgroundColor:'#00A6FF',borderColor:'#00A6FF',fontSize:25,marginTop:30}}>Déconnexion</Text>
          </TouchableOpacity>
      </View>

      
      
    )
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Titre}>Vos Rendez-Vous</Text>
      {rendezVous.map ((rendezVous,index) => (
        <Card style={{marginTop:10}}>
        <Card.Title 
        title={rendezVous._data.nom}
        titleStyle={{color:'#00A6FF'}}
        subtitle={rendezVous._data.specialiter}
        subtitleStyle={{fontWeight:'bold', color:'#000000',fontSize:15}}
        left={(props) => <Avatar.Icon {...props} icon='human' size={45}/>}/>
        <Card.Content style={{left:55}}>
          <Paragraph>Le {dayjs(rendezVous._data.Date).format('DD-MM-YYYY')} a {rendezVous._data.Heure}</Paragraph>
        </Card.Content>
      </Card>
      ))}
      <TouchableOpacity style={{alignSelf:'center'}} onPress={() => navigation.navigate('FirstPage')}>
             <Text style={{color:'#FFFFFF',borderWidth:2,backgroundColor:'#00A6FF',borderColor:'#00A6FF',fontSize:25,marginTop:30}}>Déconnexion</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default AgendaScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  container2:{
    flex:1,
    justifyContent:'center'
  },
  Titre:{
    alignSelf:'center',
    fontSize:30,
    fontWeight:'bold',
    color:'#00A6ff',
    marginTop:30
  },
  Titre2:{
    alignSelf:'center',
    fontSize:23,
    fontWeight:'bold',
    color:'#00A6ff',
  }
})