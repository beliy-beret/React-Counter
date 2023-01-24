import { ComponentMeta, ComponentStory } from '@storybook/react';

import MyInput from './MyInput';

export default {
  title: 'MyInput',
  component: MyInput,
  args: {
    label: 'Input label',
    type: 'number'
  }
} as ComponentMeta<typeof MyInput>;

const Template: ComponentStory<typeof MyInput> = (args) => <MyInput {...args} />;

export const Valid = Template.bind({});
Valid.args = {
  error: false
};

export const NoValid = Template.bind({});
NoValid.args = {
  error: true
};