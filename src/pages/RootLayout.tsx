import { Outlet } from 'react-router-dom';
import MainNavigation from 'src/Components/PageComponents/MainNavigation';

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
