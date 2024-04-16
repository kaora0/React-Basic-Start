import Button from './Button/Button'
import { differences } from '../data'
import { useState } from 'react'
// Правила использования хукков:
  // Нельзя писать их вне компонента
  // Всегда должен находиться на верхнем уровне

export default function ButtonSection(){
    // const stateArray = useState('Нажми на кнопку')
    // const contentType = stateArray[0];
    // const setContentType = stateArray[1];

    // ИЛИ
    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
    // console.log('button clicked', type)

    // Правильное изменение useState
        setContentType(type) 
    }

    return(
    <section>
          <h3> Тут заголовок h3 </h3>
          
          <Button isActive={contentType == 'way'} 
          onClick={()=> handleClick('way')}>Кнопка way</Button>
          <Button isActive={contentType == 'easy'}
          onClick={() => handleClick ('easy')}>Кнопка easy</Button>
          <Button isActive={contentType == 'program'}
          onClick={() => handleClick ('program')}>Кнопка program</Button>


          
          {/* Вывод contentType */}

          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажми на кнопку</p>
          )} */}

          {/* ИЛИ */}

          {!contentType && <p>Нажми на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}

        </section>)
}