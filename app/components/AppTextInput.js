import { View, TextInput, StyleSheet, Platform } from "react-native";
import Icon from "./Icon";
import colors from "../config/colors";

const AppTextInput = ({ icon, ...others }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon
          name={icon}
          backgroundColor={colors.lightgrey}
          iconColor={colors.grey}
        />
      )}
      <TextInput style={styles.textInput} {...others} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
    flex: 1,
    color: colors.black,
  },
});

export default AppTextInput;
