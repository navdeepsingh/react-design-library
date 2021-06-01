import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Switch, SwitchProps } from '../designSystems/SwitchComponent';

export default {
  title: 'Switch',
  component: Switch,
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const On = Template.bind({});
On.args = {
  isSwitchedOn: true,
  onClick: () => !isSwitchedOn
};

export const Off = Template.bind({});
Off.args = {
  isSwitchedOn: false
};