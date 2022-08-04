import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

const ErrorMessage = ({ error, visible }) => {
  return error && visible ? (
    <AppText style={styles.error}>{error}</AppText>
  ) : null;
};

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    fontSize: 12,
    marginLeft: 20,
  },
});

export default ErrorMessage;
