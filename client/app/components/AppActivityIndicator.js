import AnimatedLottieView from "lottie-react-native";

const AppActivityIndicator = ({ visible = false }) => {
  if (!visible) {
    return null;
  }

  return (
    <AnimatedLottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
};

export default AppActivityIndicator;
