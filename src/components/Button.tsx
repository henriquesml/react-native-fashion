import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  label: string;
  variant: "default" | "primary";
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant, onPress }) => {
  const backgroundColor =
    variant === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "SFProText-Regular",
    fontSize: 15,
    textAlign: "center",
  },
});

Button.defaultProps = { variant: "default" };

export default Button;
