/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import Svg, { SvgProps, Path, G } from "react-native-svg";

export interface SvgaProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  rotation: number;
}

/**
 * Describe your component here
 */
export const Svga = function Svga(props: SvgaProps) {
  const { style } = props;
  const $styles = [$container ];

  return (
    
    <View style={$styles}>
      {/* <Text style={$text}>Hello</Text> */}
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        id="Layer_1"
        x={0}
        y={0}
        // style={{
        // //   //   // enableBackground: "new 0 0 500 500",
        // //   //   transform: "rotate(45deg)"
          // transform: `rotate(${props.rotation}deg)`,
        // }}
        viewBox="0 0 500 500"
        rotation={props.rotation}
        // {...props}
      >
        <Path
          d="M386.4 243.9v-2.5c0-72.3-57.9-131.2-129.8-132.9l-4.4-19.6-4.3 19.7c-70.8 2.9-127.5 61.4-127.5 132.9v2.2L91 250.1l30.2 6.6c7.2 63.2 58.9 113.1 123 117.5l8.3 37.9 8.3-37.8c64.9-3.6 117.5-53.9 124.7-117.8l29.2-6.4-28.3-6.2zM246.2 116.7l-1.3 6.1c-61.3 4.4-109.9 55.5-110.3 117.8l-6 1.3v-.4c-.1-66.5 52-121 117.6-124.8zm-67.6 59.1 31.1 48.3-61.2 13.4c1.9-52.1 42-94.6 93.1-100.4l-15.4 69.7-47.6-31zm47.4 33.4-2.2 12-37.7-37 39.9 25zm-118.5 40.9 118.2-23.4 26.8 23.4h-145zm78.5 66.6c.1-.3 26-41.1 26-41.1l11.8 3.3c.1 0-37.8 38.1-37.8 37.8zm40.6-23.3 11.4 51.9c-20.3-3-38.7-11.8-53.4-24.7l42-27.2zM182 318.3c-15.6-14.5-26.7-33.6-31.3-55.2l58.9 12.9-27.6 42.3zm-52.4-59.8 6.3 1.4c8.3 52.9 51.5 94.4 105.3 99.9l1.4 6.2c-58.2-5.1-105.1-50.2-113-107.5zm122.8 138.3-26.1-123.1 26.1-23.6v146.7zm126.1-155.3v.7l-6-1.3c-.3-63.2-50.1-114.9-112.6-118.2l-1.4-6.1c66.6 2.6 120 57.6 120 124.9zM327 175.9l-48.3 30.8-15.7-69.8c52.3 4.7 93.6 47.9 95.4 101L296 224.4l31-48.5zm-33.5 48.3-12-3.3 37-37-25 40.3zm-40.8-120 26.8 122.7-26.8 23.1V104.2zm10 261.9 1.3-6.1c54.7-4.8 98.8-46.8 107.1-100.4l6.3-1.4c-7.9 58.1-55.7 103.6-114.7 107.9zm56.8-49.7-40.9-25.9 2.9-12 38 37.9zm-23.7-40.3 60.5-13.2c-4.7 22.4-16.5 42.3-33 57l-27.5-43.8zm-17.2 17.1 42.9 28.1c-15.1 12.8-33.8 21.5-54.3 24.2l11.4-52.3zm.2-20.6-25.9-22.5h145.8l-119.9 22.5zM245.8 81.6h-4.4V56.9h6.2l10.1 17.8V56.9h4.3v24.7h-5l-11.2-20v20zM82.5 255.1l-4.7-19.9h-4.7l-4.8 19.9-5-19.9h-4.6l5.9 23.4h6.5l4.2-15.9 4.1 15.9h6.3l5.8-23.4h-4.2l-4.8 19.9zm357-18v-2.5h-18v24.7h18v-2.5h-13.1V248h10.7v-2.5h-10.7v-8.4h13.1zM247.8 425c0-2 1.5-3.2 5-3.2s5 1.2 5 3.3v.8h4.6v-.6c0-3.5-3.1-5.7-9.7-5.7-6.5 0-9.7 2.2-9.7 5.7 0 6.4 14.6 6.9 14.6 12 0 2.1-1.6 3.3-5.1 3.3-3.5 0-5.1-1.2-5.1-3.3v-1.4h-4.6v1.3c0 3.5 3.1 5.7 9.8 5.7s9.9-2.3 9.9-5.7c0-6.6-14.7-7.1-14.7-12.2z"
          // className="st0"
          // fill={}
        />
      </Svg>
    </View>
  );
};

const $container: ViewStyle = {
  justifyContent: "center",
  maxHeight: "90%",
  //  transform: `rotate(${props.rotation}xdeg)`
};

// const $text: TextStyle = {
//   fontFamily: typography.primary.normal,
//   fontSize: 14,
//   color: colors.palette.primary500,
// };
