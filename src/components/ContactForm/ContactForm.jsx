import { useState } from 'react';
import { Field, Form, Input, PrimaryButton } from '../Shared.styled';
import { addContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    const isExist = contacts.some(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name: name, number: number }));
      setName('');
      setNumber('');
    }
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Field>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameChange}
          value={name}
        />
      </Field>
      <Field>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNumberChange}
          value={number}
        />
      </Field>
      <PrimaryButton type="submit">Add contact</PrimaryButton>
    </Form>
  );
};

export default ContactForm;
