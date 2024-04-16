//Тут мы создаём шаблон для списка
//Инфу берём из массива ways в data.js

 const WayToTeach = ({title,description})=> {

    return(
      <li>
        <p>
         <strong>{title}</strong>
         {description}
        </p>
      </li>
    )
  }
  export default WayToTeach