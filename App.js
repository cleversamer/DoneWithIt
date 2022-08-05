import { useState } from "react";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

const App = () => {
  const [images, setImages] = useState([]);

  return (
    <Screen>
      <ImageInputList
        images={images}
        onAddImage={(image) => setImages([...images, image])}
        onRemoveImage={(image) =>
          setImages(images.filter((img) => image !== img))
        }
      />
    </Screen>
  );
};

export default App;
