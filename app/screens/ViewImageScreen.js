import { StyleSheet, ImageBackground, View } from "react-native";
import colors from "../config/colors";

const ViewImageScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>

      <View style={styles.deleteIcon}></View>

      <ImageBackground
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 60,
    left: 40,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 60,
    right: 40,
  },
});

export default ViewImageScreen;
