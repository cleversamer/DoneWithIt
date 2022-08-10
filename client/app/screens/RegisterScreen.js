import { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppSubmitButton as SubmitButton,
  ErrorMessage,
} from "../components/forms";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const auth = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    try {
      const response = await usersApi.register(values);
      if (!response.ok) {
        if (response.data) {
          setError(response.data.error);
        } else {
          setError("An unexpected error happened.");
        }

        return;
      }

      const { data: token } = await authApi.login(
        values.email,
        values.password
      );
      auth.login(token);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <ErrorMessage visible={error} error={error} />

        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
