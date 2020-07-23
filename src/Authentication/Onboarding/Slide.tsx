import React from "react";
import { View, Image, Text, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

interface SliderProps {
  title: string;
  right?: boolean;
  picture: number;
}

export const SLIDE_HEIGHT = 0.61 * height;

const Slide: React.FC<SliderProps> = ({ title, picture, right = false }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.pictureContainer}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  pictureContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  picture: {
    borderBottomRightRadius: 75,
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
  },
});

export default Slide;
