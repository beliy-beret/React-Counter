import { fireEvent, render, screen } from '@testing-library/react';

import MyInput from './MyInput';
import s from './style.module.css';

test('Input value should be 5', () => {
  render(<MyInput label='Test' value={5} onChange={() => console.log('')} type={'number'} />);
  const input = screen.getByRole<HTMLInputElement>('spinbutton');
  expect(input.value).toBe('5');
});

test('Input change event', () => {
  render(<MyInput label='Test' value={0} onChange={() => console.log()} type={'number'} />);
  const input = screen.getByRole<HTMLInputElement>('spinbutton');
  fireEvent.change(input as HTMLInputElement, { target: { value: '10' } });
  expect(input.value).toBe('10');
});

test('Label should be in document', () => {
  render(<MyInput label='Test' value={0} onChange={() => console.log()} type={'number'} />);
  expect(screen.getByText('Test')).toBeInTheDocument();
});

test('Input classList should contain Error class', () => {
  render(
    <MyInput label='Test' value={5} onChange={() => console.log('')} type={'number'} error={true} />
  );
  const input = screen.getByRole<HTMLInputElement>('spinbutton');
  expect(input.classList.contains(s.error)).toBeTruthy();
});
