import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, width, ...others }) => {
  const { errors, touched, setFieldTouched, handleChange } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...others}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
