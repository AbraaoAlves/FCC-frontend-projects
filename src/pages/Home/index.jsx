import {Suspense, lazy} from 'react';

const Home = lazy(() => import('./Home'));

export default () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Home />
  </Suspense>
);