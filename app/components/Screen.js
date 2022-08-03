import { SafeAreaView } from "react-native";
import Constants from "expo-constants";

const Screen = (props) => {
  return (
    <SafeAreaView style={{ paddingTop: Constants.statusBarHeight }}>
      {props.children}
    </SafeAreaView>
  );
};

export default Screen;
