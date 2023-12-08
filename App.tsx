import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';



export default function App() {

  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [compassHeading, setComppassHeading] = useState<Location.LocationHeadingObject | null>(null)

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied")
        return
      }

      // const location = await Location.getCurrentPositionAsync({})
      // setLocation(location)

      // const compl = await Location.getHeadingAsync()
      Location.watchHeadingAsync((cc) => setComppassHeading(cc))
      // setCompp(compl)
    })()
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>asdf</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
