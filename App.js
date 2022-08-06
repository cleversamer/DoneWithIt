import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

const App = () => {
  const screenOptions = {
    headerShown: false,
    contentStyle: { backgroundColor: "transparent" },
  };

  return (
    <NavigationContainer>
      <AppNavigator screenOptions={screenOptions} />
    </NavigationContainer>
  );
};

export default App;
