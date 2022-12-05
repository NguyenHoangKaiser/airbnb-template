import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import RootLayout from 'src/layout/RootLayout';
import Pages from 'src/pages';
import ErrorPage from 'src/pages/Boundaries/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={Pages.HomePage} />
      <Route path="/preview" element={Pages.PreviewPage} />
    </Route>,
  ),
);

function DefineRouter() {
  return <RouterProvider router={router} />;
}

export default DefineRouter;
