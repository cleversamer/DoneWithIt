import client from "./client";

const endPoint = "/messages";

const send = (message, listingId) =>
  client.post(endPoint, { message, listingId });

export default {
  send,
};
