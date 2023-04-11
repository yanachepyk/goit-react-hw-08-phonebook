import { Field, Form, Input, PrimaryButton } from 'components/Shared.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        Name:
        <Input type="text" name="name" />
      </Field>
      <Field>
        Email:
        <Input type="email" name="email" />
      </Field>
      <Field>
        Password:
        <Input type="password" name="password" />
      </Field>
      <PrimaryButton>Register</PrimaryButton>
    </Form>
  );
};

export default RegisterForm;
