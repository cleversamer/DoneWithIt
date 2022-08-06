import { View, TextInput, StyleSheet } from "react-native";
import Icon from "./Icon";
import defaultStyles from "../config/styles";
import colors from "../config/colors";

const AppTextInput = ({ icon, width = "100%", ...others }) => {
  return (
    <View style={[styles.container, { width }]}>
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
  },
});

export default AppTextInput;
