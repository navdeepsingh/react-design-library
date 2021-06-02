import React from 'react';
import styled, { css } from 'styled-components'

export interface IButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonStyles =  css<Partial<IButtonProps>>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${props => (props.primary ? 'white': '#333')};    
  background-color: ${props => (props.primary ? '#1ea7fd;': 'red')};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  font-size: ${props => (props.size === 'small' ? '12px' : props.size === 'medium' ? '14px' : '16px')};
  padding: ${props => (props.size === 'small' ? '10px 16px;' : props.size === 'medium' ? '11px 20px' : '12px 24px')};
`

const StyledButton = styled('button')`
  ${ButtonStyles}
`

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      style={{ backgroundColor }}
      primary={primary}
      size={size}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
