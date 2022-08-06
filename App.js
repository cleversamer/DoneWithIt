import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    headerShown: false,
    contentStyle: { backgroundColor: "transparent" },
  };

  const StackNavigator = () => (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Listing Edit" component={ListingEditScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );

  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        ...screenOptions,
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Items"
        component={ListingEditScreen}
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="email" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="email" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <AuthNavigator screenOptions={screenOptions} />
    </NavigationContainer>
  );
};

export default App;
