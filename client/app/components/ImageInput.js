import { useEffect } from "react";
import { TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import Icon from "./Icon";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";
import logger from "../utility/logger";

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) {
      alert("You need to allow permission to be able to use the library.");
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure want to delete image?", [
        { text: "Yes", onPress: () => onChangeImage("") },
        { text: "No" },
      ]);
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      logger.log(err);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <Icon
          name="camera"
          backgroundColor="transparent"
          iconColor={colors.grey}
          size={70}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.lightgrey,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
