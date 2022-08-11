import Bugsnag from "@bugsnag/expo";

const start = () => Bugsnag.start();

const log = (error) => Bugsnag.notify(error);

export default {
  start,
  log,
};
