import { BorderText } from "../../styled";

const Escena = ({ textLine, id, position }) => (
  <div>
    <BorderText active={position === id ? true : false}>{textLine}</BorderText>
  </div>
);

export default Escena;

