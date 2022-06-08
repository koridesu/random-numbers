import './App.css';
import RandomNumbers from './Components/RandomNumbers';
import { useState } from 'react';

function App() {

  const tempArray: number[] = [];
  const [count, setCount] = useState<number>(100);

  return (
    <div>
      <ul>
        {Array(count).fill(<RandomNumbers />)}

      </ul>
    </div>
  );
}

export default App;
