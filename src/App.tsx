import { useState } from "react";
import { Input } from "./components/Input";

function App() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  return (
    <div>
      <Input
        name="Name"
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        name="Photo"
        id="photo"
        type="url"
        value={photo}
        onChange={(event) => setPhoto(event.target.value)}
      />

      <div>
        <img src={photo} alt="Foto de perfil" />
        <p>{name}</p>
      </div>
    </div>
  );
}

export default App;
