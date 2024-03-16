import { useState } from 'react';
import './App.scss';

export default function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="header">Finger Trainer</h1>
      <button className="button" type="button" onClick={() => setCount(count + 1)}>
        Счетчик на
        {' '}
        {count}
      </button>
    </>
  );
}
