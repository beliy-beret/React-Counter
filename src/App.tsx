import CounterSetting, { FormDataType } from './components/CounterSetting/CounterSetting';
import { FC, useEffect, useState } from 'react';

import Counter from './components/Counter/Counter';

export type CounterType = {
  min: number;
  max: number;
  current: number;
};

const App: FC = () => {
  // Form options
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);

  // Counter options
  const initialCounter = (): CounterType => {
    const storageCounter = localStorage.getItem('counter');
    if (storageCounter) {
      return JSON.parse(storageCounter);
    }
    return { min: 0, max: 1, current: 0 };
  };
  const [counter, setCounter] = useState<CounterType>(initialCounter);

  const incrementCurrentValue = () => {
    if (counter.current < counter.max) {
      setCounter({ ...counter, current: counter.current + 1 });
    }
  };

  const resetCurrentValue = () => setCounter({ ...counter, current: counter.min });

  const setCounterSetting = (formData: FormDataType) => {
    if (formData.min >= 0 && formData.max > formData.min) {
      setCounter({ ...counter, ...formData });
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid form data');
    }
  };

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter));
    if (counter.current < counter.min) {
      setCounter({ ...counter, current: counter.min });
    }
    if (counter.current > counter.max) {
      setCounter({ ...counter, current: counter.max });
    }
  }, [counter]);

  return (
    <div className={'App'}>
      <CounterSetting
        submit={setCounterSetting}
        maxValue={counter.max}
        minValue={counter.min}
        setErrorMessage={setErrorMessage}
        toggleIsEdit={setIsEdit}
        error={!!errorMessage}
      />
      <Counter
        incrementCurrentValue={incrementCurrentValue}
        resetCurrentValue={resetCurrentValue}
        counter={counter}
        errorMessage={errorMessage}
        isEdit={isEdit}
      />
    </div>
  );
};

export default App;
