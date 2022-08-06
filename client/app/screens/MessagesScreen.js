import { useState } from "react";
import { FlatList } from "react-native";
import Screen from "../components/Screen";
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";

const MessagesScreen = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "Mosh Hamedani",
      description: "Hey! Is this item sill available?",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "Mosh Hamedani",
      description:
        "I'm interested in this item. When you will be able to post it?",
      image: require("../assets/mosh.jpg"),
    },
  ]);

  const handleDeleteMessage = (mssgId) => {
    setMessages(messages.filter((mssg) => mssg.id !== mssgId));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={(message) => message.id.toString()}
        onRefresh={() => setMessages([messages[0]])}
        refreshing={refreshing}
        renderItem={({ item, index, separators }) => (
          <ListItem
            key={index}
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("Message clicked")}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => handleDeleteMessage(item.id)}
              />
            )}
          />
        )}
      />
    </Screen>
  );
};

export default MessagesScreen;
