import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

import ListingEditScreen from "../screens/ListingEditScreen";

import { screenOptions, NewListingButton } from "./default";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: (props) => (
          <MaterialCommunityIcons name="home" {...props} />
        ),
      }}
    />

    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
      })}
    />

    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: (props) => (
          <MaterialCommunityIcons name="account" {...props} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
