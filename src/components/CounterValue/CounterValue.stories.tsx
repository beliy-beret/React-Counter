import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CounterType } from '../../App';
import CounterValue from './CounterValue';

const counter: CounterType = {
  min: 0,
  max: 10,
  current: 5
};

export default {
  title: 'CounterValue',
  component: CounterValue,
  args: {
    counter: counter
  }
} as ComponentMeta<typeof CounterValue>;

const Template: ComponentStory<typeof CounterValue> = (args) => <CounterValue {...args} />;

export const CurrentValue = Template.bind({});
CurrentValue.args = {
  isEdit: false,
  errorMessage: '',
};

export const Error = Template.bind({});
Error.args = {
  isEdit: false,
  errorMessage: 'Error message',
};

export const isEditing = Template.bind({});
isEditing.args = {
  errorMessage: '',
  isEdit: true
};
