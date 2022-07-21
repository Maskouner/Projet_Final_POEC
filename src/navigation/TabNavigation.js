import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AcceuilScreen from '../screens/AcceuilScreen'
import AgendaScreen from '../screens/AgendaScreen'
import MapScreen from '../screens/MapScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
                 tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Acceuil') {
                    iconName = focused ? 'home' : 'home-outline';
                  }
                  if (route.name === 'Agenda') {
                    iconName = focused ? 'calendar' : 'calendar-outline';
                  }
                  if (route.name === 'Map') {
                    iconName = focused ? 'map' : 'map-outline';
                  }
        
                  return <Icon name={iconName} size={size} color={focused ? '#9F8236' : '#adabab'}  />
        
        
                }
    })}>
        <Tab.Screen name="Acceuil" component={AcceuilScreen} />
        <Tab.Screen name="Agenda" component={AgendaScreen} />
        <Tab.Screen name="Map" component={MapScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation
