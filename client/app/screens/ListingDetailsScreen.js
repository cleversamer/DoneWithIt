import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "react-native-expo-image-cache";
import AppText from "../components/AppText";
import ContactSellerForm from "../components/ContactSellerForm";
import { ListItem } from "../components/lists";
import colors from "../config/colors";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View>
        <Image
          preview={{ uri: listing.images[0].thumbnail }}
          style={styles.image}
          tint="light"
          uri={listing.images[0].url}
        />

        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price} color="secondary">
            ${listing.price}
          </AppText>

          <ListItem
            image={require("../assets/samer.jpg")}
            title="Samer A.⚡"
            subTitle="5 listings"
          />

          <ContactSellerForm listing={listing} />
        </View>
      </View>
    </KeyboardAvoidingView>
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
