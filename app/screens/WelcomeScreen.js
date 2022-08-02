import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";

const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>

      <View style={styles.loginBtn}></View>

      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 90,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
});

export default WelcomeScreen;