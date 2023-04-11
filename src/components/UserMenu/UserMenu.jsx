import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { Header, LogOutIcon, NavMenu, StyledNavLink, UserEmail, UserInfo } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  return (
    <Header>
      <NavMenu>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
      </NavMenu>
      {isLoggedIn ? (
        <UserInfo>
          <UserEmail>{user.email}</UserEmail>
          <LogOutIcon type="button" title="Log Out" onClick={() => dispatch(logOut())}/>
        </UserInfo>
      ) : (
        <NavMenu>
          <StyledNavLink to="/login">Log In</StyledNavLink>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </NavMenu>
      )}
    </Header>
  );
};

export default UserMenu;
