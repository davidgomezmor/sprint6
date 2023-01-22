import { BorderText } from "../../styled";

const Escena = ({ textFragment, id, position }) => (
  <div>
    <BorderText selection={position === id ? true : false}>{textFragment}</BorderText>
  </div>
);

export default Escena;

