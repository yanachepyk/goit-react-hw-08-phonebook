import { Field, Form, Input, PrimaryButton } from 'components/Shared.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        Email:
        <Input type="email" name="email" />
      </Field>
      <Field>
        Password:
        <Input type="password" name="password" />
      </Field>
      <PrimaryButton>Login</PrimaryButton>
    </Form>
  );
};

export default LoginForm;
