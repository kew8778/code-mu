import React, {useState} from 'react';

function App() {
  const [value, setValue] = useState('');
  
  return <div>
    <input value={value} onChange={(e) => setValue(e.target.value)} />
    <p>Кол-во символов в тексте: {value.length}</p>
  </div>;
}

export default App;
