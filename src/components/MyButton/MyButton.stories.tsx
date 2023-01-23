import MyButton from './MyButton';

export default {
  title: 'Button',
  component: MyButton
};

export const Primary = () => <MyButton variant='primary'>Primary</MyButton>;
export const Secondary = () => <MyButton variant='secondary'>Secondary</MyButton>;
export const Default = () => <MyButton variant='default'>Primary</MyButton>;