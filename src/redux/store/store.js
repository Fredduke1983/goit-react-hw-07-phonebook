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
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(createContactsThunk.fulfilled, (state, action) => {
        state.contacts = [...state.contacts, action.payload.body];
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.contacts = [...state.contacts].filter(
          el => el.id !== action.payload.id
        );
      });
  },
});

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
// reducers: {
//   addContact: ({ contacts }, { payload: { valueName, valueNumber } }) => {
//     return {
//       contacts: [
//         ...contacts,
//         {
//           id: nanoid(),
//           name: valueName,
//           number: valueNumber,
//         },
//       ],
//       valueFilter: '',
//     };
//   },
//   delContact: ({ contacts }, { payload }) => {
//     const contactsDeleted = [...contacts].filter(contact => {
//       return !contact.id.includes(payload);
//     });
//     return {
//       contacts: [...contactsDeleted],
//       valueFilter: '',
//     };
//   },
//   filterContacts: ({ contacts }, { payload }) => {
//     return {
//       contacts: [...contacts],
//       valueFilter: payload,
//     };
//   },
// },
//   extraReducers: builder => {
//     builder.addCase(reducerContacts.fulfilled, (state, action) => {
//       console.log(state);
//       state.cont.push(action.payload);
//     });
//   },
// });

// export const { addContact, delContact, filterContacts } = contactsSlice.actions;

const store = configureStore({
  reducer: contactsSlice.reducer,
});
export { store };
