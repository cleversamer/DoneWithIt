import { useState } from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const MessagesScreen = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState([
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
