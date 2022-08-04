import { useFormikContext } from "formik";
import AppButton from "../AppButton";

const AppSubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton onPress={handleSubmit}>{title}</AppButton>;
};

export default AppSubmitButton;
