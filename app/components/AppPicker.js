import { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import Icon from "./Icon";
import defaultStyles from "../config/styles";
import colors from "../config/colors";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleSelectItem = (item) => {
    onSelectItem(item);
    setShowModal(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={styles.container}>
          <Icon
            name={icon}
            backgroundColor={colors.lightgrey}
            iconColor={colors.grey}
          />

          <AppText style={[defaultStyles.text, styles.text]}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>

          <Icon
            name="chevron-down"
            backgroundColor={colors.lightgrey}
            iconColor={colors.grey}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={showModal} animationType="slide">
        <Button title="Close" onPress={() => setShowModal(false)} />

        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item, index, separators }) => (
            <PickerItem
              key={index}
              item={item}
              onPress={() => handleSelectItem(item)}
            />
          )}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
