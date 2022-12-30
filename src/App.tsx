import {FC, useState} from 'react';
import Counter from "./components/Counter/Counter";

const App: FC = () => {

  const [counter, setCounter] = useState<number>(0);
  const incrementCounter = () => {
    if(counter < 5){
      setCounter(counter + 1);
    }
  };
  const resetCounter = () => setCounter(0)

  return (
    <div>
      <Counter
        incrementCounter={incrementCounter}
        resetCounter={resetCounter}
        counterValue={counter}
      />
    </div>
  );
}

export default App;
