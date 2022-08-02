import { StyleSheet, ImageBackground, View } from "react-native";

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
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 60,
    left: 40,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#43cdc4",
    position: "absolute",
    top: 60,
    right: 40,
  },
});

export default ViewImageScreen;
