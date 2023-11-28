import { useState } from "react";

export default function App() {
  const [changeVal, setChangeVal] = useState('');
  const [blurVal, setBlurVal] = useState('');

  function calcProdDivsNum(num) {
    const divs = [1,];
    
    if (num === 0 || num % 1 !== 0) {
      return 'Число или не натуральное или равно нулю';
    }

    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        divs.push(i);
      }
    }

    const numDivs = divs.length;
    let res = 1;

    for (let i = 0; i < numDivs; i++) {
      res *= divs[i];
    }

    return res;
  }
  
  function handleChange(e) {
    setChangeVal(e.target.value);
  };

  function handleBlur(e) {
    setBlurVal(calcProdDivsNum(e.target.value));
  };

  return (
    <>
      <span>Число: </span>
      <input value={changeVal} onChange={handleChange} onBlur={handleBlur} />

      <p>Произведение делителей числа: {blurVal}</p>
    </>
  );
}
