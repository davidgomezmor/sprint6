import styled from "styled-components";

export const BorderText = styled.p`
border: 1px solid black;
color: black;
display: flex;
flex: stretch;
align-items: center;
justify-content: center;
text-align: center;
height: 50px;
border-radius: 25px;
border-width: medium;
background-color: ${({ selection }) => selection ? 'pink' : 'white'}
`;

export const ButtonStyle = styled.p`
  background-color: #E3DCDC; 
  font-weight: bold;
  border-radius: 5px;
  color: black;
  padding: 15px 320px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 2px 1em 0 auto;
  cursor: pointer;
  &:hover,
  &:focus {
    color: white;
    background-color: #1E90FF;
  }
  `;


