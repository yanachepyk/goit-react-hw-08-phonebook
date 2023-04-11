import { Suspense } from 'react';
import UserMenu from './UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <UserMenu />
      <Suspense fallback={null}>
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </Suspense>
    </div>
  );
};

export default Layout;
