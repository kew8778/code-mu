import React, {useState} from 'react';

// Конвертация в градусы Цельсия
function convertTemp(degsFahrenheit) {
  return (degsFahrenheit - 32) * 5 / 9;
}

function App() {
  const [temp, setTemp] = useState('');
  
  return <div>
    <span>градусы Фаренгейта: </span>
    <input value={temp} onChange={(e) => setTemp(e.target.value)} />
    <p>градусы Цельсия: {convertTemp(temp)}</p>
  </div>;
}

export default App;
