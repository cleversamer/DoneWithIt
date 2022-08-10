import { NavigationContainer } from "@react-navigation/native";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";

const App = () => {
  return (
    <>
      <OfflineNotice />

      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
