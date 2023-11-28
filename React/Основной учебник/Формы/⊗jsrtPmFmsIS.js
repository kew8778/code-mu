import React, {useState} from 'react';

function App() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [val3, setVal3] = useState('');
  const [val4, setVal4] = useState('');
  const [val5, setVal5] = useState('');
  
  return <div>
    <span>Числа: </span><br />
    <input value={val1} onChange={(e) => setVal1(e.target.value)} /><br />
    <input value={val2} onChange={(e) => setVal2(e.target.value)} /><br />
    <input value={val3} onChange={(e) => setVal3(e.target.value)} /><br />
    <input value={val4} onChange={(e) => setVal4(e.target.value)} /><br />
    <input value={val5} onChange={(e) => setVal5(e.target.value)} />
    <p>среднее арифметическое: {(+val1 + +val2 + +val4 + +val4 + +val5) / 5}</p>
  </div>;
}

export default App;
