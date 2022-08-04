import { StyleSheet, Image, View } from "react-native";
import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import colors from "../config/colors";

const ListingDetailsScreen = (props) => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price} color="secondary">
          $100
        </AppText>
      </View>

      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subTitle="5 listings"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 3,
  },
  price: {
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default ListingDetailsScreen;
