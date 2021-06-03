import React, {useState} from 'react'
import {Switch} from './switch'

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

export const BasicSwitch = () => {
  // Prop getters
  const {on, togglerProps} = useToggle({initialOn: false})
  return <Switch isSwitchedOn={on} {...togglerProps} />
}
