import React, {useState} from 'react';

function App() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [res, setRes] = useState('');

  function handleClick() {
    const date1 = new Date(...val1.split('-'));
    const date2 = new Date(...val2.split('-'));

    const diff = Math.abs( (date2 - date1) / (1000 * 3600 * 24) );

    setRes(diff);
  }
  
  return (
    <div>
      <span>Даты: </span>
      <input value={val1} onChange={(e) => setVal1(e.target.value)} />
      <input value={val2} onChange={(e) => setVal2(e.target.value)} /><br />

      <button onClick={handleClick}>посчитать</button>
      
      <p>Разница в днях: {res}</p>
    </div>
  );
}

export default App;
