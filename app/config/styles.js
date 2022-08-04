import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    color: colors.black,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
    fontSize: 16,
  },
};
