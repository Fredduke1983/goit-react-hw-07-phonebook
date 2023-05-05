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
  }
`;

const FilterListItem = styled.li`
  margin-bottom: 10px;
`;

const InputSearch = styled.input`
  margin-right: 10px;
  border-radius: 5px;
  border-color: aliceblue;
`;

export { FilterDelBtn, FilterListItem, InputSearch };
