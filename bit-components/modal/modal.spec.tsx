import React from 'react'
import {render, screen} from '@testing-library/react'
import {App} from './modal.composition'
import userEvent from '@testing-library/user-event'

test('open & close the modal', () => {
  render(<App />)
  const buttons = screen.getAllByTestId('open-modal')
  const modal = screen.getAllByTestId('modal')
  const closeModal = screen.getByTestId('close-modal')
  const [button1] = buttons

  userEvent.click(button1)
  expect(modal[0]).toBeVisible()
  expect(modal[0]).toContainElement(closeModal)

  userEvent.click(closeModal)
  expect(modal[0]).not.toBeVisible()
})
