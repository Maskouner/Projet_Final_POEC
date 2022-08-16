import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import { TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import firestore from '@react-native-firebase/firestore';

const AjoutMedecinScreen = () => {
  const [disabled, setDisabled] = useState(true)
  const [specialisation, setSpecialisation] = useState('')
  const navigation = useNavigation()

  const specialisationArray = ['']

  const checkSpecialisation = (value) => {
    if (!value) {
      setDisabled(true)
    } else {
      if (!specialisationArray.includes(value)) {
        setDisabled(false)
      }
    }
    setSpecialisation(value)
  }

  const AjoutMedecin = (props) => {
    firestore()
        .collection('Docteur')
        .add({
            nom: props.nom,
            prenom: props.prenom,
            adresse: props.adresse,
            codePostal: props.codePostal,
            ville: props.ville,
            specialiter: specialisation
        })
        .then(() => {
            console.log('User added!');
            navigation.navigate('FirstPage')
        });
        
       
        
}
  return (
    <Formik
      initialValues={{ prenom: '', nom: '',codePostal: '', ville: '', adresse: '' }}
      onSubmit={values => AjoutMedecin(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ScrollView style={styles.container}>
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
          <Picker
            selectedValue={specialisation}
            onValueChange={(itemValue, itemIndex) => {
              checkSpecialisation(itemValue)

            }}
          >
            <Picker.Item label="Specialisation" value="" />
            <Picker.Item label="Médecin généraliste" value="Médecin généraliste" />
            <Picker.Item label="Pédicure-Podologue" value="Pédicure-Podologue" />
            <Picker.Item label="Chirurgien-dentiste" value="Chirurgien-dentiste" />
            <Picker.Item label="Masseur-kinésithérapeute" value="Masseur-kinésithérapeute" />
            <Picker.Item label="Médecin spécialiste" value="Médecin spécialiste" />
            <Picker.Item label="Ostéopathe" value="Ostéopathe" />
            <Picker.Item label="Sage-Femme" value="Sage-Femme" />
            <Picker.Item label="Psychologue" value="Psychologue" />
            <Picker.Item label="Opticien / Audioprothésiste" value="Opticien / Audioprothésiste" />
            <Picker.Item label="Pharmacien" value="Pharmacien" />
            <Picker.Item label="Infirmier" value="Infirmier" /> 
            <Picker.Item label="Autre spécialité" value="Autre spécialité" /> 
          </Picker>
          <TextInput
            label="Entrer la ville de votre cabinet"
            placeholder='Ville'
            onChangeText={handleChange('ville')}
            onBlur={handleBlur('ville')}
            returnKeyType="next"
            value={values.ville}
          />
          <TextInput
            label="Entrer l'adresse de votre cabinet"
            placeholder='Adresse Cabinet'
            onChangeText={handleChange('adresse')}
            onBlur={handleBlur('adresse')}
            returnKeyType="next"
            value={values.adresse}
          />
          <TextInput
            label="Entrer le code postal de votre ville"
            placeholder='Code Postal'
            onChangeText={handleChange('codePostal')}
            onBlur={handleBlur('codePostal')}
            returnKeyType="next"
            value={values.codePostal}
            keyboardType='numeric'
          />
          
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={handleSubmit}>
            <Text style={{ color: '#FFFFFF', borderWidth: 2, backgroundColor: '#00A6FF', borderColor: '#00A6FF', fontSize: 25 }}>Ajouter</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Formik>
  )
}

export default AjoutMedecinScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})