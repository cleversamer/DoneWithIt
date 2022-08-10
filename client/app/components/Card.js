import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ imageUrl, thumbnailUrl, title, subTitle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.card}>
        <Image
          preview={{ uri: thumbnailUrl }}
          style={styles.image}
          tint="light"
          uri={imageUrl}
        />

        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={2}>
            {title}
          </AppText>

          <AppText style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
