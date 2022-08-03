import { Image, StyleSheet, View, TouchableHighlight } from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({
  Icon,
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  style,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.lightgrey}>
          <View style={[styles.container, style]}>
            {Icon}
            {image && <Image style={styles.image} source={image} />}

            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
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
    backgroundColor: colors.lightgrey,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: colors.grey,
  },
});

export default ListItem;
