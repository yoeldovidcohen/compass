import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { Svga } from "./Svga";

// const StyledView = styled(View)

export default function App() {
  // const colorScheme = useColorScheme();

  // const themeContainerStyle =
  // colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [compassHeading, setComppassHeading] = useState(0);
  // useState<Location.LocationHeadingObject | null>(null);

  const colorScheme = useColorScheme();

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
    // Appearance.addChangeListener((chng)=>NativeWindStyleSheet.setColorScheme("system"))
  }, []);
  // NativeWindStyleSheet.setColorScheme

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Text style={{margin: 10}}>{color}</Text> */}
      <View
        style={{
          flex: 1,
          // alignItems: "center",
          // alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: colorScheme === "light" ? "white" : "black",
        }}
      >
        {/* <Text className="m-10">{colorScheme}</Text> */}
        <Svga rotation={360 - compassHeading} />

        {/* {compassHeading && <Text>{compassHeading.trueHeading}</Text>} */}
        {/* </View> */}
        <StatusBar
          backgroundColor={colorScheme === "light" ? "white" : "black"}
        />
      </View>
    </SafeAreaView>
  );
}

// const SafeStyle = StyleSheet.create({
//     flex: 1,
// });
