import React from 'react'
import styled from 'styled-components'

export interface SwitchProps {
  ariaLabel?: string
  isSwitchedOn: boolean
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

/**
 * Define default props here
 */
const defaultProps = {
  ariaLabel: 'Switch',
}

const ToggleInput = styled.input`
  /* visually hidden but still accessible */
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;

  &:focus + span::after {
    box-sizing: initial;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
      inset 0px 0px 0px 3px #9c9c9c;
  }
`

const StyledToggleButton = styled('span')<Partial<SwitchProps>>`
  box-sizing: initial;
  display: inline-block;
  outline: 0;
  width: 8em;
  height: 4em;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: ${props => (props.isSwitchedOn ? '#86d993' : '#fbfbfb')};
  border-radius: 4em;
  padding: 4px;
  transition: all 0.4s ease;
  border: 2px solid #e8eae9;

  &::after {
    left: ${props => (props.isSwitchedOn ? '50%' : 0)};
    position: relative;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    border-radius: 4em;
    background: #fbfbfb;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
  }

  [disabled] {
    opacity: 0.7;
    cursor: auto;
  }
`

/**
 * To suppress the warning of adding readonly to input checkbox field
 */
const noop = () => {}

/**
 * Primary UI component for user interaction
 */
export const Switch: React.FC<SwitchProps> = ({
  ariaLabel = defaultProps.ariaLabel,
  isSwitchedOn,
  onClick,
  ...props
}) => {
  return (
    <label aria-label={ariaLabel}>
      <ToggleInput
        type="checkbox"
        checked={isSwitchedOn}
        onChange={noop}
        onClick={onClick}
        data-testid="toggle-input"
      />
      <StyledToggleButton isSwitchedOn={isSwitchedOn} {...props} />
    </label>
  )
}
