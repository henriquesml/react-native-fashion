import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Button } from "../../components";

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide: React.FC<SubslideProps> = ({
  subtitle,
  description,
  last,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        onPress={onPress}
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: "#0C0D34",
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  },
});

export default Subslide;
