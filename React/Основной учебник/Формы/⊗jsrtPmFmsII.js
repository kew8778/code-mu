import React, {useState} from 'react';

function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  
  return <div>
    <input value={value1} onChange={(e) => setValue1(e.target.value)} />
    <input value={value2} onChange={(e) => setValue2(e.target.value)} />
    <p>text: {value1}</p>
    <p>text: {value2}</p>
  </div>;
}

export default App;
