import contactsApi from './contactsApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await contactsApi.getContacts();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data, status } = await contactsApi.addContact(contact);

      return { data, status };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data, status } = await contactsApi.deleteContact(contactId);

      return { data, status };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const pendingAction = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};

const rejectedAction = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    setContactsFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.pending, pendingAction)
      .addCase(fetchContacts.rejected, rejectedAction)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload.data);
        state.contacts.isLoading = false;
      })
      .addCase(addContact.pending, pendingAction)
      .addCase(addContact.rejected, rejectedAction)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.data.id
        );
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.pending, pendingAction)
      .addCase(deleteContact.rejected, rejectedAction),
});

export const { setContactsFilter } = contactSlice.actions;
