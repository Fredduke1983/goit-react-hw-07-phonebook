import { createSlice, configureStore } from '@reduxjs/toolkit';
import { initialState } from './initial';
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/contacts/reducerContacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      return {
        ...state,
        valueFilter: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(createContactsThunk.fulfilled, (state, action) => {
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.contacts = [...state.contacts].filter(
          el => el.id !== action.payload.id
        );
      });
  },
});

export const { filterContacts } = contactsSlice.actions;

const store = configureStore({
  reducer: contactsSlice.reducer,
});
export { store };
