import styled from 'styled-components';

const PhoneBookStyle = styled.div`
  position: relative;
  width: 600px;
  min-height: 600px;
  margin: 20px auto;
  padding: 40px 40px;
  box-shadow: 0px 5px 5px 5px grey;
  border-radius: 10px;
`;

const PhoneBookHead = styled.div`
  display: grid;
  justify-content: center;
  border: 1px solid black;
  box-shadow: 0px 5px 5px 5px grey;
  border-radius: 10px;
`;

const MainTitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export { PhoneBookStyle, PhoneBookHead, MainTitle };
