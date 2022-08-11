import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import expoPushTokenApi from "../api/expoPushToken";
import useAuth from "../auth/useAuth";

const useNotifications = (notificationListener) => {
  const { user } = useAuth();

  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) {
      return user
        ? Notifications.addNotificationReceivedListener(notificationListener)
        : Notifications.removeNotificationSubscription();
    }
  }, [user]);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) {
        return;
      }

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.register(token);
    } catch (err) {
      console.log(err);
    }
  };
};

export default useNotifications;
