import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import AppActivityIndicator from "../components/AppActivityIndicator";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) {
      return setError(true);
    }

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <View style={styles.errorScreen}>
          <AppText style={styles.errorMessage}>
            Couldn't retrieve listings...
          </AppText>

          <AppButton onPress={loadListings}>Retry</AppButton>
        </View>
      )}

      <AppActivityIndicator visible={loading} />

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item, index, separators }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightgrey,
    flex: 1,
    padding: 20,
  },
  errorScreen: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  errorMessage: {
    color: colors.danger,
    fontSize: 14,
    marginBottom: 50,
    textAlign: "center",
  },
});

export default ListingsScreen;
