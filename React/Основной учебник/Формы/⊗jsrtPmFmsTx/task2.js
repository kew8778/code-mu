import { useState } from "react";

export default function App() {
  const [changeVal, setChangeVal] = useState('');

  function getSum(text) {
    let nums = text.split(/\s/);
    let res = 0;
    let allNums = nums.length;

    for (let i = 0; i < allNums; i++) {
      res += +nums[i];
    }

    return res;
  }

  return (
    <>
      <span>Числа (каждое на своей строке):</span><br />
      <textarea value={changeVal} onChange={(e) => setChangeVal(e.target.value)} />

      <p>Сумма чисел:<br />{getSum(changeVal)}</p>
    </>
  );
}
