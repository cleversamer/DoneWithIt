import { FlatList, StyleSheet, View } from "react-native";
import { useEffect } from "react";
import AppActivityIndicator from "../components/AppActivityIndicator";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <View style={styles.errorScreen}>
          <AppText style={styles.errorMessage}>
            Couldn't retrieve listings...
          </AppText>

          <AppButton onPress={getListingsApi.request}>Retry</AppButton>
        </View>
      )}

      <AppActivityIndicator visible={getListingsApi.loading} />

      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item, index, separators }) => (
          <Card
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            subTitle={`$${item.price}`}
            thumbnailUrl={item.images[0].thumbnail}
            title={item.title}
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
