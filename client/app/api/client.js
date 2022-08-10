import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://192.168.1.235:9000/api",
  timeout: 1000,
});

apiClient.addAsyncRequestTransform(async (req) => {
  const token = await authStorage.getToken();
  if (!token) {
    return;
  }

  req.headers["x-auth-token"] = token;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
