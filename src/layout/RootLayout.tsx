import { Outlet } from 'react-router-dom';
import MainNavigation from 'src/layout/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
