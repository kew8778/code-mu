import { useState } from "react";

export default function App() {
  const [changeVal, setChangeVal] = useState('');

  // взято с https://translite-online.ru/transliteracziya-dlya-poiskovikov-yandeks-i-google
  const seoTranslit = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
    'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 
    'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
    'ф': 'f', 'х': 'kh', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
    'щ': 'shh', 'ы': 'y', 'э': 'eh', 'ю': 'yu', 'я': 'ya'
  };

  function getTranslit(text) {
    let res = '';
    let textLength = text.length;

    for (let i = 0; i < textLength; i++) {
      if ( seoTranslit[ text[i].toLowerCase() ] ) {
        res += seoTranslit[ text[i].toLowerCase() ]
      } else {
        res += text[i];
      }
    }

    return res;
  }

  return (
    <>
      <span>Текст на русском:</span><br />
      <textarea value={changeVal} onChange={(e) => setChangeVal(e.target.value)} />

      <p>Транслит:<br />{getTranslit(changeVal)}</p>
    </>
  );
}
