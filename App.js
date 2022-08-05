import { useState } from "react";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";

const App = () => {
  const [imageUri, setImageUri] = useState("");

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(imageUri) => setImageUri(imageUri)}
      />
    </Screen>
  );
};

export default App;
