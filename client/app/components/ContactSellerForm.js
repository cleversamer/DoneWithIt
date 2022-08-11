import { Alert, Keyboard } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import { AppForm, AppFormField, AppSubmitButton } from "./forms";
import messagesApi from "../api/messages";

const ContactSellerForm = ({ listing }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();

    Notifications.presentNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller.",
    });
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        name="message"
        placeholder="Say something..."
      />

      <AppSubmitButton title="Contact Seller" />
    </AppForm>
  );
};

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
