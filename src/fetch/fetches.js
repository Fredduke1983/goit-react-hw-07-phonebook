import axios from 'axios';

export const getContacts = async () => {
  const getContacts = await axios.get(
    'https://6452a61dbce0b0a0f74cb532.mockapi.io/contacts/contacts'
  );

  return getContacts.data;
};

export const createContacts = async contact => {
  const createContact = await axios.post(
    `https://6452a61dbce0b0a0f74cb532.mockapi.io/contacts/contacts`,
    { body: contact }
  );

  return createContact.data;
};
