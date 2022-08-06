import { Text } from "react-native";
import defaultStyles from "../config/styles";

const AppText = ({ children, style, ...others }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...others}>
      {children}
    </Text>
  );
};

export default AppText;
