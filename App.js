import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
      }}
    >
      <WelcomeScreen />
    </View>
  );
};

export default App;
