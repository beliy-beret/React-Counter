import { render, screen } from '@testing-library/react'

import MyButton from './MyButton'
import s from './style.module.css'

test('Button classList should contain "primary" class', () => {
  render(<MyButton variant={'primary'}>Test</MyButton>)
  expect(
    screen.getByTestId<HTMLButtonElement>('myButton').classList.contains(s.primary)
  ).toBeTruthy()
})

test('Button classList should contain "secondary" class', () => {
  render(<MyButton variant={'secondary'}>Test</MyButton>)
  expect(
    screen.getByTestId<HTMLButtonElement>('myButton').classList.contains(s.secondary)
  ).toBeTruthy()
})

test('Button should contain text', () => {
  const TEXT = 'Button'
  render(<MyButton variant={'primary'}>{TEXT}</MyButton>)
  expect(screen.getByTestId<HTMLButtonElement>('myButton').innerHTML).toBe(TEXT)
})
