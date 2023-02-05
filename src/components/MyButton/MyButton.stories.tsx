import { ComponentMeta, ComponentStory } from '@storybook/react'

import MyButton from './MyButton'

export default {
  title: 'MyButton',
  component: MyButton,
  args: {
    children: 'Button',
  },
} as ComponentMeta<typeof MyButton>

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
}

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}
