import React from 'react';
import { useCounter } from '../store/useCounter';
import './Counter.css'
const Counter: React.FC = () => {
    const {count, increase, decrease} = useCounter()

  return (
    <div>
      <h1>{count}</h1>
      <button  className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={increase}>Increase</button>
      <button  className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
