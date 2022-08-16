import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AgendaScreen from '../screens/AgendaScreen'
import MapScreen from '../screens/MapScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import AcceuilScreen from '../screens/AcceuilScreen'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
                 tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Accueil ') {
                    iconName = focused ? 'home' : 'home-outline';
                  }
                  if (route.name === 'Agenda') {
                    iconName = focused ? 'calendar' : 'calendar-outline';
                  }
                  if (route.name === 'Map') {
                    iconName = focused ? 'map' : 'map-outline';
                  }
        
                  return <Icon name={iconName} size={size} color={focused ? '#00A6FF' : '#adabab'}  />
        
        
                }
    })}>
        <Tab.Screen name="Accueil "  component={AcceuilScreen} />
        <Tab.Screen name="Agenda" component={AgendaScreen} />
        <Tab.Screen name="Map" component={MapScreen}/>
      </Tab.Navigator>
    
  )
}

export default TabNavigation
