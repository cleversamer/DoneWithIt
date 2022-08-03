import { Platform, StyleSheet, Text } from "react-native";

const AppText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
});

export default AppText;
