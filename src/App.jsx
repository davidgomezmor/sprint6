import React from "react";
import { useState } from "react";
import { frases } from "./frases"
import Escena from "./components/escena/Escena";
import { ButtonStyle } from "./styled";

const App = () => {
  const [position, setPosition] = useState(1);

  const Forward = () => {
    if (position < frases.length) {
      setPosition(position + 1);
    }
    else {
      setPosition(1);
    }
  }

  const Backwards = () => {
    if (position <= frases.length) {
      setPosition(position - 1);
    }

    if (position === 1) {
      setPosition(frases.length);
    }
  }

  return <>
    <div>
      <ButtonStyle onClick={() => Forward()}> SEGÜENT▶</ButtonStyle>
      <ButtonStyle onClick={() => Backwards()}>◀ANTERIOR </ButtonStyle>
    </div>
    {frases.map((frase) => (
      <Escena
        key={frase.id}
        id={frase.id}
        textFragment={frase.text}
        position={position}
      />
    ))}
    <div>
    <ButtonStyle> WELCOME </ButtonStyle>
    </div>
  </>
}

export default App;
