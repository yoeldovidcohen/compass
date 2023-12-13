import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { Svga } from "./Svga";



export default function App() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [compassHeading, setComppassHeading] = useState(0);
  // useState<Location.LocationHeadingObject | null>(null);

  const color = useColorScheme()

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // const location = await Location.getCurrentPositionAsync({})
      // setLocation(location)

      // const compl = await Location.getHeadingAsync()
      Location.watchHeadingAsync((cc) =>
        setComppassHeading(Math.round(cc.trueHeading))
      );
      // setCompp(compl)
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{margin: 10}}>{color}</Text>
      <View
        style={{
          flex: 1,
          // alignItems: "center",
          // alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height:"100%",
          // backgroundColor: "grey",
        }}
      >
        <Svga rotation={360 - compassHeading} style={{ margin: "auto" }} />

        {/* {compassHeading && <Text>{compassHeading.trueHeading}</Text>} */}
      {/* </View> */}
      <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

// const SafeStyle = StyleSheet.create({
//     flex: 1,
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
