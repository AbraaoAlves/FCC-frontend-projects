import { Suspense, lazy } from "react";

const PalindromePage = lazy(() => import("./Palindrome"));

export function Palindrome() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PalindromePage />
    </Suspense>
  );
}
