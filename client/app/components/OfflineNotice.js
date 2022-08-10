import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import AppText from "./AppText";
import colors from "../config/colors";

const OfflineNotice = (props) => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No internet connection.</AppText>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 30,
    justifyContent: "center",
    marginTop: Constants.statusBarHeight + 10,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white,
    fontSize: 13,
  },
});

export default OfflineNotice;
