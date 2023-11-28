import { useState } from "react";

export default function App() {
  const [changeVal, setChangeVal] = useState('');
  const [blurVal, setBlurVal] = useState('');

  function getSumDigits(num) {
    let digits = num.length;
    let res = 0;

    for (let i = 0; i < digits; i++) {
      res += +num[i];
    }

    return res;
  }
  
  function handleChange(e) {
    setChangeVal(e.target.value);
  };

  function handleBlur(e) {
    setBlurVal(getSumDigits(e.target.value));
  };

  return (
    <>
      <input value={changeVal} onChange={handleChange} onBlur={handleBlur} />

      <p>Сумма цифр числа: {blurVal}</p>
    </>
  );
}
