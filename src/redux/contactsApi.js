import axios from 'axios';

const getContacts = () => {
  return axios.get(`contacts`);
};

const addContact = contact => {
  return axios.post(`contacts`, contact);
};

const deleteContact = contactId => {
  return axios.delete(`contacts/${contactId}`, {});
};

const contactsApi = { getContacts, addContact, deleteContact };

export default contactsApi;
