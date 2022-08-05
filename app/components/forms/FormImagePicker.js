import { StyleSheet } from "react-native";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const FormImagePicker = ({ name }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const handleAdd = (image) => {
    setFieldValue(name, [...values[name], image]);
  };

  const handleRemove = (image) => {
    setFieldValue(
      name,
      values[name].filter((img) => image !== img)
    );
  };

  return (
    <>
      <ImageInputList
        images={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />

      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
