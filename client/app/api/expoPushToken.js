import client from "./client";

const endPoint = "/expoPushTokens";

const register = (token) => client.post(endPoint, { token });

export default {
  register,
};
