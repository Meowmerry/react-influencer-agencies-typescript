import React from 'react';
import { useCounter } from '../store/useCounter';
import './Counter.css'
import DisplayCount from './DisplayCount';
const Counter: React.FC = () => {
    const { increase, decrease} = useCounter()

  return (
    <div>
     <DisplayCount/>
      <button  className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={increase}>Increase</button>
      <button  className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
