import { useState, useEffect } from "react";
import * as Location from "expo-location";
import logger from "../utility/logger";

export default useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    requestLocation();
  }, []);

  const requestLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      setLocation({ latitude, longitude });
    } catch (error) {
      logger.log(err);
    }
  };

  return location;
};
