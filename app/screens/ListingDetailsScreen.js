import { StyleSheet, Image, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

const ListingDetailsView = (props) => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price} color="secondary">
          $100
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
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

export default ListingDetailsView;
