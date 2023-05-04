import { createAsyncThunk } from '@reduxjs/toolkit';
import { createContacts, getContacts } from 'fetch/fetches';

export const getContactsThunk = createAsyncThunk(
  'phonebook/getContacts',
  async () => {
    return await getContacts();
  }
);

export const createContactsThunk = createAsyncThunk(
  'phonebook/createContacts',
  async contact => {
    return await createContacts(contact);
  }
);
