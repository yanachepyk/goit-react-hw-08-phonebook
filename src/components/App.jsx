import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { RestrictedRoute } from './ResctictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operation';
import { useAuth } from 'hooks/useAuth';

const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const HomePage = lazy(() => import('../pages/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginPage />}
            ></RestrictedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            ></RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<ContactsPage />}
            ></PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
