import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";
import OfflineNotice from "./app/components/OfflineNotice";
import { navigationRef } from "./app/navigation/rootNavigation";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    restoreUser();
  }, []);

  const restoreUser = async () => {
    try {
      const user = await authStorage.getUser();
      setUser(user);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />

      <NavigationContainer ref={navigationRef}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
