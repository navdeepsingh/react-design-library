import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Modal, ModalProps } from '../designSystems/ModalComponent';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  children: (<>
    Test
    <button className="close-button">
      Close
      <span aria-hidden>×</span>
    </button>
  </>)
};