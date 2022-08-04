import { View, TextInput, StyleSheet } from "react-native";
import Icon from "./Icon";
import defaultStyles from "../config/styles";
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
      <TextInput style={[defaultStyles.text, styles.textInput]} {...others} />
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
    flex: 1,
  },
});

export default AppTextInput;
