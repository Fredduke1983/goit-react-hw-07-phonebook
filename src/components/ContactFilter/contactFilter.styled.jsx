import styled from 'styled-components';

const FilterDelBtn = styled.button`
  cursor: pointer;
  margin-left: 20px;
  border-radius: 50%;
  background-color: #fff;
  transition: background-color 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    cursor: pointer;
    background-color: red;
    color: black;
    box-shadow: 0px 2px 2px 2px grey;
  }
`;

const FilterListItem = styled.li`
  margin-bottom: 10px;
  color: #fff;
`;

const InputSearch = styled.input`
  margin-right: 10px;
  border-radius: 5px;
  border-color: aliceblue;
  box-shadow: 0px 2px 2px 2px grey;
`;

const NoContacts = styled.h1`
  color: #fff;
  text-shadow: grey 2px 2px 5px;
`;

export { FilterDelBtn, FilterListItem, InputSearch, NoContacts };
