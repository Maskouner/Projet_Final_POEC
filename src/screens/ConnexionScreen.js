import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-paper'
import auth from '@react-native-firebase/auth';

const ConnexionScreen = () => {
  const navigation = useNavigation()
  const LogInUser = (props) => {
    auth()
      .signInWithEmailAndPassword(props.email, props.mdp)
      .then(res => {
        console.log(res);
        navigation.navigate('Accueil');
      })
      .catch(res => {
        console.log(res);
      });
  };

  return (
    <Formik
      initialValues={{ email: '', mdp: ''}}
      onSubmit={values => LogInUser(values)}
    >
       {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={styles.container}>
          <TextInput
                  label="Rentrer Votre Email"
                  placeholder='Email'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  returnKeyType="next"
                  value={values.email}
                />
            <TextInput
                  label="Rentrer Votre Mot De Passe"
                  placeholder='Mot De Passe'
                  onChangeText={handleChange('mdp')}
                  onBlur={handleBlur('mdp')}
                  returnKeyType="next"
                  value={values.mdp}
                />

        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={handleSubmit}>
          <Text style={{ color: '#FFFFFF', borderWidth: 2, backgroundColor: '#00A6FF', borderColor: '#00A6FF', fontSize: 25 }}>Se Connecter</Text>
        </TouchableOpacity>
      </View>
       )}
    </Formik>
  )
}

export default ConnexionScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})