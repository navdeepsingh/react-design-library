import React, {useEffect, useState} from 'react'
import {Switch} from './components/designSystems/SwitchComponent'
import {Button} from './components/designSystems/ButtonComponent'
import { Modal } from './components/designSystems/ModalComponent'
import './App.css'

function useToggle({initialOn = false}) {
  const [on, setOn] = React.useState(initialOn)
  const toggle = () => {
    setOn(!on)
  }

  return {
    on,
    togglerProps: {
      'aria-pressed': on,
      onClick: toggle,
    },
  }
}

function App() {
  const [state1, setState1] = useState(false)
  const [state2, setState2] = useState(false) 
  const [showDialog, setShowDialog] = useState(false) 

  // useEffect(() => {
  //    const onEscapeKey = (e: KeyboardEvent) => {
  //     if (e.code === 'Escape') {
  //       setShowDialog(false)
  //     }
  //   }
  //   document.addEventListener('keydown', onEscapeKey);

  //   return () => document.removeEventListener('keydown', onEscapeKey);
  // }, [showDialog])

  
  const handleClick1 = (e: React.MouseEvent) => {
    e.preventDefault();    
    setState1(!state1)
  }

  const handleClick2 = (e: React.MouseEvent) => {
    e.preventDefault();    
    setState2(!state2)
  }

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setShowDialog(true)
  }
  
  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setShowDialog(false)
  }

  const {on, togglerProps} = useToggle({initialOn: false})

  return (
    <div className="App">
      <Switch
        isSwitchedOn={on}
        {...togglerProps}
      />
      
      {/* {counter}
      {counter > 3 ? 'Ooops!!' : null} */}
      <Button 
        label={"Button"}
        size="medium"
        primary={true}
        onClick={openModal}
       />

       <Modal isOpen={showDialog} onDismiss={closeModal}>
          <p>Hello there. I am a dialog</p>
          <Switch
            isSwitchedOn={state2}
            onClick={handleClick2}
          />
          <button className="close-button" onClick={closeModal}>
            Close
            <span aria-hidden>×</span>
          </button>
       </Modal>
    </div>
  )
}

export default App
