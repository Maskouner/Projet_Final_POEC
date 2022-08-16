import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PrendreRendezVous from '../screens/PrendreRendezVous';
import TabNavigation from './TabNavigation';
import FirstPageScreen from '../screens/FirstPageScreen';
import ConnexionScreen from '../screens/ConnexionScreen';
import InscriptionScreen from '../screens/InscriptionScreen';
import AjoutMedecinScreen from '../screens/AjoutMedecinScreen';


const Stack = createStackNavigator();


const StackNavigation = () => {
  return (
    
    <Stack.Navigator initialRouteName='FirstPage'>
      <Stack.Screen name="Accueil" options={{ headerShown: false}} component={TabNavigation} />
      <Stack.Screen name="FirstPage" options={{ headerShown: false }} component={FirstPageScreen} />
      <Stack.Screen name="Connexion" component={ConnexionScreen} />
      <Stack.Screen name="Inscription" component={InscriptionScreen} />
      <Stack.Screen name="Santer" component={AjoutMedecinScreen} />
      <Stack.Screen name="RendezVous" component={PrendreRendezVous} />
    </Stack.Navigator>
   
  )
}

export default StackNavigation