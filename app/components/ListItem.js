import { Image, StyleSheet, View, TouchableHighlight } from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.lightgrey}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />

            <View>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.grey,
  },
});

export default ListItem;
