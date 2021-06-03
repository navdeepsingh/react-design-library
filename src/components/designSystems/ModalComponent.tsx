import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

export interface ModalProps {
  isOpen: boolean
  onDismiss: (event: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}

const ModalWrapper = styled.div<Partial<ModalProps>>`
  [role='dialog'] {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: ${props => (props.isOpen ? 'block' : 'none')};
    overflow: hidden;

    > div {
      width: 50vw;
      margin: 10vh auto;
      background: #fff;
      padding: 2rem;
      outline: none;
      position: relative;
      text-align: left;
      z-index: 101;
    }
  }

  button.close-button {
    position: absolute;
    right: 10px;
    top: 0;
    padding: 5px;
    border: none;
    font-size: 150%;
    cursor: pointer;
  }
`

const ModalOverlay = styled.div<Partial<ModalProps>>`
  background: rgba(0, 0, 0, 0.33);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`

/**
 * Primary UI component for user interaction
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  onDismiss,
  children,
}) => {
  return (
    <ModalWrapper isOpen={isOpen} >
      <div role="dialog" aria-modal={isOpen} data-testid="modal">
        <div>{children}</div>
      </div>
      <ModalOverlay isOpen={isOpen} />
    </ModalWrapper>
  )
}
