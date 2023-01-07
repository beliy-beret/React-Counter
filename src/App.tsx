import {FC, useEffect, useState} from 'react';
import Counter from "./components/Counter/Counter";
import CounterSetting, {FormDataType} from "./components/CounterSetting/CounterSetting";

export type CounterType = {
  min: number
  max: number
  current: number
}

const App: FC = () => {

  const [counter, setCounter] = useState<CounterType>({min: 0, max: 5, current: 0});
  const incrementCurrentValue = () => {
    if(counter.current < counter.max){
      setCounter({...counter, current: counter.current + 1});
    }
  };
  const resetCurrentValue = () => setCounter({...counter, current: 0});
  const setCounterSetting = (formData: FormDataType) => {
    if(
      counter.min !== formData.min &&
      formData.min < formData.max &&
      formData.min >= 0
    ){
      setCounter({...counter, min: formData.min});
    }
    if(counter.max !== formData.max && formData.max > formData.min){
      setCounter({...counter, max: formData.max});
    }
  };

  useEffect(() => {
    if(counter.current < counter.min){
      setCounter({...counter, current: counter.min});
    }
  }, [counter]);

  return (
    <div>
      <CounterSetting submit={setCounterSetting} maxValue={counter.max} minValue={counter.min} />
      <Counter
        incrementCurrentValue={incrementCurrentValue}
        resetCurrentValue={resetCurrentValue}
        counter={counter}
      />
    </div>
  );
}

export default App;
