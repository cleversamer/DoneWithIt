import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

const ListItemSeparator = (props) => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.lightgrey,
  },
});

export default ListItemSeparator;
