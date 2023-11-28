import React, {useState} from 'react';

function calcBirthYear(age) {
  return new Date().getFullYear() - age;
}

function App() {
  const [age, setAge] = useState('');
  
  return <div>
    <span>Ваш возраст (полных лет в этом году): </span>
    <input value={age} onChange={(e) => setAge(e.target.value)} />
    <p>Ваш год рождения: {calcBirthYear(age)}</p>
  </div>;
}

export default App;
