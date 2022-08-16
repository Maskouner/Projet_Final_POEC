import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from 'react-native-paper'
import dayjs from 'dayjs'
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker'
import { TextInput } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore';

const PrendreRendezVous = (props) => {
  const navigation = useNavigation()
  const [dateTimeShow, setDateTimeShow] = useState(false)
  const [date, setDate] = useState(new Date())
  const [disabled, setDisabled] = useState(true)
  const [heure, setHeure] = useState('')

  const heureArray = ['']

  const checkHeure = (value) => {
    if (!value) {
      setDisabled(true)
    } else {
      if (!heureArray.includes(value)) {
        setDisabled(false)
    }
  }
    setHeure(value)
  }

  const AjoutRendezVous = () => {
    firestore()
        .collection('RendezVous')
        .add({
           nom: props.route.params.DR,
           specialiter: props.route.params.Spe,
           Date: date.toString(),
           Heure: heure

        })
        .then(() => {
            console.log('User added!');
            navigation.navigate('Accueil')
        });
      }
  

  return (
    <View style={styles.container}>
      <Avatar.Icon  icon='human' size={128} style={styles.avatar}/>
      <Text style={styles.titre}>{props.route.params.DR}</Text>
      <Text style={styles.subtitre}>{props.route.params.Spe}</Text>
      <TextInput
        label="Date du Rendez-Vous"
        style={{marginTop:10}}
        value={dayjs(date).format('DD-MM-YYYY')}
        onChangeText={() => { }}
        onBlur={() => { }}
        onFocus={() => {
          setDateTimeShow(true)
        }}
      />
      {dateTimeShow && (
        <DateTimePicker
          mode="date"
          value={new Date()}
          is24Hour={true}
          onChange={(event, date) => {
            setDateTimeShow(false)
            setDate(date)
          }}
        />
      )}
      <Picker
        selectedValue={heure}
        onValueChange={(itemValue, itemIndex) => {
          checkHeure(itemValue)

        }}
      >
        <Picker.Item label="Heure du Rendez-Vous" value="" />
        <Picker.Item label="8h30" value="8h30" />
        <Picker.Item label="9h00" value="9h00" />
        <Picker.Item label="9h30" value="9h30" />
        <Picker.Item label="10h00" value="10h00" />
        <Picker.Item label="10h30" value="10h30" />
        <Picker.Item label="11h00" value="11h00" />
        <Picker.Item label="11h30" value="11h30" />
        <Picker.Item label="14h00" value="14h00" />
        <Picker.Item label="14h30" value="14h30" />
        <Picker.Item label="15h00" value="15h00" />
        <Picker.Item label="15h30" value="15h30" />
        <Picker.Item label="16h00" value="16h00" />
        <Picker.Item label="16h30" value="16h30" />
        <Picker.Item label="17h00" value="17h00" />
      </Picker>

      <TouchableOpacity style={{ alignSelf: 'center', marginTop: 20 }} onPress={() => AjoutRendezVous()}>
        <Text style={{ color: '#FFFFFF', borderWidth: 2, backgroundColor: '#00A6FF', borderColor: '#00A6FF', fontSize: 25 }}>Valider</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PrendreRendezVous

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 30
  },
  titre: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00AAFF'
  },
  subtitre: {
    alignSelf: 'center',
    marginTop: 2,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000'
  }
})