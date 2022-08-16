import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import dayjs from 'dayjs'
import { TextInput } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const InscriptionScreen = () => {
  const [dateTimeShow, setDateTimeShow] = useState(false)
  const [date, setDate] = useState(new Date())
  const navigation = useNavigation()

  const User = (props) => {
    auth()
  .createUserWithEmailAndPassword(props.email,props.mdp)
  .then(() => {
    console.log('User account created & signed in!');
    AjoutUtilisateur(props)
  })
  }

  const AjoutUtilisateur = (props) => {
    firestore()
        .collection('Utilisateurs')
        .add({
            nom: props.nom,
            prenom: props.prenom,
            telephone: props.tel,
            dateDeNaissance:date,
            email: props.email,
        })
        .then(() => {
            console.log('User added!');
            navigation.navigate('FirstPage')
        });
        
       
        
}

  return (
    <Formik
      initialValues={{ prenom: '', nom: '', email: '', mdp: '', tel: '' }}
      onSubmit={values => User(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            label="Entrer Votre Prenom"
            placeholder='Prenom'
            onChangeText={handleChange('prenom')}
            onBlur={handleBlur('prenom')}
            returnKeyType="next"
            value={values.prenom}
          />
          <TextInput
            label="Entrer Votre Nom"
            placeholder='Nom'
            onChangeText={handleChange('nom')}
            onBlur={handleBlur('nom')}
            returnKeyType="next"
            value={values.nom}
          />
          <TextInput
            label="Entrer Votre Email"
            placeholder='Email'
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            returnKeyType="next"
            value={values.email}
          />
          <TextInput
            label="Entrer Votre Mot De Passe"
            placeholder='Mot De Passe'
            onChangeText={handleChange('mdp')}
            onBlur={handleBlur('mdp')}
            returnKeyType="next"
            value={values.mdp}
          />
          <TextInput
            label="Date de naissance"
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
          <TextInput
            label="Entrer votre Numero de Telephone"
            placeholder='Numero de Telephone'
            onChangeText={handleChange('tel')}
            onBlur={handleBlur('tel')}
            returnKeyType="next"
            value={values.tel}
            keyboardType='numeric'
          />
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={handleSubmit}>
            <Text style={{ color: '#FFFFFF', borderWidth: 2, backgroundColor: '#00A6FF', borderColor: '#00A6FF', fontSize: 25 }}>Inscription</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  )
}

export default InscriptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})