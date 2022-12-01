import { useRouteError } from 'react-router-dom';

import MainNavigation from 'src/Components/PageComponents/MainNavigation';

function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1 className="text-lg uppercase text-orange-300">
          An error occurred!
        </h1>
        <p className="text-center">{error.message}</p>
      </main>
    </>
  );
}

export default ErrorPage;
