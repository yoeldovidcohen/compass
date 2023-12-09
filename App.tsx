import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import { Svga } from "./Svga"



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
      <View>
        {compassHeading && <Text>heading is: {compassHeading.trueHeading}</Text>}
        {compassHeading && <Svga rotation={360 - compassHeading.trueHeading} />}

        <StatusBar style="auto" />
      </View>
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
