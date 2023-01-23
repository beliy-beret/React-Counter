import MyInput from './MyInput';

export default {
  title: 'MyInput',
  component: MyInput
};

export const Valid = () => <MyInput value={0} onChange={() => {
  console.log('');
}} type={'number'} label={'Valid'} />;

export const NoValid = () => <MyInput value={0} onChange={() => {
  console.log('');
}} type={'number'} label={'Valid'} error={true} />;
