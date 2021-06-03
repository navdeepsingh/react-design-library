import React from 'react'
import {render, screen} from '@testing-library/react'
import {BasicSwitch} from './switch.composition'
import userEvent from '@testing-library/user-event'

test('toggling the switch', () => {
  render(<BasicSwitch />)
  const buttons = screen.getAllByTestId('toggle-input')
  const [toggleButton1] = buttons
  userEvent.click(toggleButton1)
  expect(toggleButton1).toBeChecked()

  userEvent.click(toggleButton1)
  expect(toggleButton1).not.toBeChecked()
})
