import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (err) {
    console.log(err);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (err) {
    console.log(err);
  }
};

const getUser = async () => {
  const token = await getToken();
  if (token) {
    return jwtDecode(token);
  }

  return null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (err) {
    console.log(err);
  }
};

export default {
  getUser,
  removeToken,
  storeToken,
};
