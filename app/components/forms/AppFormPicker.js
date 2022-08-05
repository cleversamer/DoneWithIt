import { useFormikContext } from "formik";
import FormPicker from "../FormPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({ name, ...others }) => {
  const { errors, values, setFieldValue } = useFormikContext();

  const handleSelectItem = (item) => {
    setFieldValue(name, item);
  };

  return (
    <>
      <FormPicker
        items={values[name]}
        onSelectItem={handleSelectItem}
        {...others}
      />
      <ErrorMessage error={errors[name]} visible />
    </>
  );
};

export default AppFormPicker;
