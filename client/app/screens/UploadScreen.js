import { Modal, StyleSheet, View } from "react-native";
import { Bar } from "react-native-progress";
import AnimatedLottieView from "lottie-react-native";
import colors from "../config/colors";

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Bar progress={progress} color={colors.primary} width={200} />
        ) : (
          <AnimatedLottieView
            autoPlay
            onAnimationFinish={onDone}
            loop={false}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  animation: {
    with: 150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
