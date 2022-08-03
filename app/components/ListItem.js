import { Image, StyleSheet, View, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({ image, title, subTitle, onPress = () => {} }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.lightgrey}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />

        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
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
