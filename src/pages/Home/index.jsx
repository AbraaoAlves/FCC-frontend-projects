import {Suspense, lazy} from 'react';

const HomePage = lazy(() => import('./Home'));

export const Home = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HomePage />
  </Suspense>
);