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
import colors from "../config/colors";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

const FormPicker = ({
  icon,
  onSelectItem,
  placeholder,
  items,
  name,
  width = "100%",
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelectItem = (item) => {
    onSelectItem(item);
    setSelectedItem(item);
    setShowModal(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={[styles.container, { width }]}>
          <Icon
            name={icon}
            backgroundColor={colors.lightgrey}
            iconColor={colors.grey}
          />

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

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
  placeholder: {
    color: colors.grey,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default FormPicker;
