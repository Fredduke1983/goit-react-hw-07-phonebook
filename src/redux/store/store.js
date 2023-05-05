import { createSlice, configureStore, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initial';
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/contacts/reducerContacts';

const arrThunks = [createContactsThunk, deleteContactsThunk, getContactsThunk];
const allThunks = type => arrThunks.map(el => el[type]);
const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = state => {
  state.isLoading = false;
};
const handleRej = (state, action) => {
  console.error(action.error.message);
  state.error = action.error.message;
};

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
      })

      .addMatcher(isAnyOf(...allThunks('pending')), handlePending)
      .addMatcher(isAnyOf(...allThunks('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...allThunks('rejected')), handleRej);
  },
});

export const { filterContacts } = contactsSlice.actions;

const store = configureStore({
  reducer: contactsSlice.reducer,
});
export { store };
