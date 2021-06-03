import React, {useState} from 'react'
import {Modal} from './modal'

export const App = () => {
  const [showDialog, setShowDialog] = useState(false)
  return (
    <>
      <button onClick={() => setShowDialog(true)}>Open Modal</button>
      <Modal isOpen={showDialog}>
        Modal Content
        <button
          className="close-button"
          onClick={() => setShowDialog(false)}
          data-testid="close-modal"
        >
          Close
          <span aria-hidden>×</span>
        </button>
      </Modal>
    </>
  )
}
