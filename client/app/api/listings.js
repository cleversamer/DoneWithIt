import client from "./client";

const endPoint = "/listings";

const getListings = () => client.get(endPoint);

export default {
  getListings,
};
