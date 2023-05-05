import styled from 'styled-components';

const FormContact = styled.form`
  padding: 20px;
`;
const LabelContact = styled.label``;
const InputContact = styled.input`
  margin-right: 10px;
  border-radius: 5px;
  border-color: aliceblue;
`;
const FormBtn = styled.button`
  border-radius: 5px;
  background-color: black;
  color: white;

  transition: background-color 1000ms cubic-bezier(0.165, 0.84, 0.44, 1),
    color 1000ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    cursor: pointer;
    background-color: aliceblue;
    color: black;
  }
`;

export { FormContact, LabelContact, InputContact, FormBtn };
