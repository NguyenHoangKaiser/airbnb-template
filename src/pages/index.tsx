import { lazy, Suspense } from 'react';
import LoadingPage from 'src/pages/Boundaries/LoadingPage';

/**
 * This function returns a lazy-loaded page. It will be loaded only when the user navigates to this page.
 * @param importStatement The import statement for the page.
 * @returns The lazy-loaded page.
 * @example const HomePage = lazyLoad(() => import('src/pages/HomePage'));
 */
function LazyLoadPage(
  importStatement: () => Promise<{ default: () => JSX.Element }>,
) {
  const Component = lazy(importStatement);
  return (
    <Suspense fallback={<LoadingPage />}>
      <Component />
    </Suspense>
  );
}

export default {
  HomePage: LazyLoadPage(() => import('src/pages/Home/HomePage')),
  PreviewPage: LazyLoadPage(() => import('src/pages/PreviewPage')),
};
