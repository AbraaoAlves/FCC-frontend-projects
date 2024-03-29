import '@testing-library/jest-dom'
import {expect, test} from 'vitest';
import {render} from '@testing-library/react'

import {App} from './App';

test('App can render', () => {
  const result = render(<App />)
  const content = result.getByText(/ola mundo/i);
  expect(content).toBeInTheDocument();
});