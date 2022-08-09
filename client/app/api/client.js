import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.235:9000/api",
  timeout: 1000,
});

export default apiClient;
