import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from 'src/pages/RootLayout';
import ErrorPage from 'src/pages/ErrorPage';
import HomePage from 'src/pages/HomePage';
import NotePage from 'src/pages/NotePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/note',
        element: <NotePage />,
      },
    ],
  },
]);

function DefineRouter() {
  return <RouterProvider router={router} />;
}

export default DefineRouter;
