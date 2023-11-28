import React, {useState} from 'react';

function App() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [res, setRes] = useState('');
  
  return <div>
    <span>Два числа: </span>
    <input value={val1} onChange={(e) => setVal1(e.target.value)} />
    <input value={val2} onChange={(e) => setVal2(e.target.value)} /><br />

    <span>Показать: </span>
    <button onClick={() => setRes(+val1 + +val2)}>сумму</button>
    <button onClick={() => setRes(val1 * val2)}>произведение</button><br />
    
    <p>Рузультат: {res}</p>
  </div>;
}

export default App;
