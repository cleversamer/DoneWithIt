import { Platform, StyleSheet, Text } from "react-native";

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
});

export default AppText;
