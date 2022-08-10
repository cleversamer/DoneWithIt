import client from "./client";

const endPoint = "/users";

const register = async (user) => client.post(endPoint, user);

export default { register };
