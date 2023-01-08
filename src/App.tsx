import {FC, useEffect, useState} from 'react';
import Counter from "./components/Counter/Counter";
import CounterSetting, {FormDataType} from "./components/CounterSetting/CounterSetting";

export type CounterType = {
  min: number
  max: number
  current: number
}

const App: FC = () => {

  // Form options
  const [error, setError] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);

  // Counter options
  const [counter, setCounter] = useState<CounterType>({min: 0, max: 1, current: 0});
  const incrementCurrentValue = () => {
    if(counter.current < counter.max){
      setCounter({...counter, current: counter.current + 1});
    }
  };
  const resetCurrentValue = () => setCounter({...counter, current: counter.min});
  const setCounterSetting = (formData: FormDataType) => {
    if(formData.min > 0 && formData.max > formData.min){
      setCounter({...counter, ...formData});
      setError('')
    } else {
      setError('Invalid form data');
    }
  };

  useEffect(() => {
    if(counter.current < counter.min){
      setCounter({...counter, current: counter.min});
    }
  }, [counter]);

  return (
    <div className={'App'}>
      <CounterSetting
        submit={setCounterSetting}
        maxValue={counter.max}
        minValue={counter.min}
        setError={setError}
        toggleIsEdit={setIsEdit}
      />
      <Counter
        incrementCurrentValue={incrementCurrentValue}
        resetCurrentValue={resetCurrentValue}
        counter={counter}
        error={error}
        isEdit={isEdit}
      />
    </div>
  );
}

export default App;
