import { Suspense, lazy } from 'react';

const QuotePage = lazy(() => import('./Quote'));

export function Quotes(){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuotePage />
    </Suspense>
  )
}