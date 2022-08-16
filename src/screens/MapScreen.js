import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'



const MapScreen = () => {
  const navigation = useNavigation()

  return (
<View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} 
       style={styles.map}
       maxZoomLevel={13}
       region={{
         latitude: 49.49437,
         longitude: 0.107929,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
      <Marker 
      coordinate={{ latitude : 48.60937747997613 , longitude : 2.434881517710026 }} 
      title={"Pascal Rifflart"}
      description={"Medecin Generaliste"}
      onCalloutPress={() => navigation.navigate('RendezVous', {DR: "Pascal Rifflart",Spe:"Medecin Generaliste"})}
      />

      <Marker 
      coordinate={{ latitude : 49.88629161564242 , longitude : 2.27380173202703 }} 
      title={"Anthony Deprunier"}
      description={"Ostheopate"}
      onCalloutPress={() => navigation.navigate('RendezVous', {DR: "Anthony Deprunier",Spe:"Ostheopate"})}
      />

     <Marker 
      coordinate={{ latitude : 49.43263897073591 , longitude : 1.0928416241589245 }} 
      title={"Williams Bello"}
      description={"Pédicure-Podologue"}
      onCalloutPress={() => navigation.navigate('RendezVous', {DR: "Williams Bellow",Spe:"Pédicure-Podologue"})}
      />

      <Marker 
      coordinate={{ latitude : 43.571308125348835 , longitude : 1.3918322014115025}} 
      title={"Nicolas Mayeur"}
      description={"Medecin Generaliste"}
      onCalloutPress={() => navigation.navigate('RendezVous', {DR: "Nicolas Mayeur",Spe:"Medecin Generaliste"})}
      />

      <Marker 
      coordinate={{ latitude : 43.93209069372 , longitude : 4.805339112079481}} 
      title={"Ryhan Maillot"}
      description={"Masseur-kinésithérapeute"}
      onCalloutPress={() => navigation.navigate('RendezVous', {DR: "Ryhan Maillot",Spe:"Masseur-kinésithérapeute"})}
      />

      <Marker 
      coordinate={{ latitude : 49.3475806 , longitude : 0.5333167}} 
      title={"Vera Teles"}
      description={"Medecin Generaliste"}
      />
      
      
     </MapView>
   </View>
   
  )

}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });