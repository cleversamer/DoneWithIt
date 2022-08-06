import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedNavigator from "./FeedNavigator";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";

import { screenOptions } from "./default";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
