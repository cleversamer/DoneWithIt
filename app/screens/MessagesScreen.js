import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const MessagesScreen = (props) => {
  const messages = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/mosh.jpg"),
    },
  ];

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item, index, separators }) => (
          <ListItem
            key={index}
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("Message clicked")}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;
