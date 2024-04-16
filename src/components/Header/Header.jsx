import logo from '/logo-name.svg'
import './Header.css'
import { useState } from 'react'
import {styled} from 'styled-components'

// const HeaderContainer = styled.header
//   height: 50px;
//   display: flex;
//   padding: 0 2rem;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid #ccc;
//   background: #fafafa;

// Создаём новый компонент:
export default function Header(){ {/* Называть лучше с большой буквы!!! */}

// Получение текущего времени
// const dateVariable = new Date().toLocaleTimeString()

const [dateVariable, setDataVariable] = useState(new Date())
setInterval(() => setDataVariable(new Date()), 1000)

  return(
    <header>
        {/* <h3>Result Universyty</h3> */}

        <img src={logo} alt={'Result'} />
        
        <span>Время сейчас: {dateVariable.toLocaleTimeString()}</span>
      </header>
  )
}