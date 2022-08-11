import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.1.235:9000/api",
  },
  staging: {
    apiUrl: "https://samer-donewithit.herokuapp.com/api",
  },
  production: {
    apiUrl: "https://samer-donewithit.herokuapp.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.production;
};

export default getCurrentSettings();
