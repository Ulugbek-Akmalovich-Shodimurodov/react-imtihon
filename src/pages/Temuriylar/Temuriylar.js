import React, { useState } from 'react'
import "./Temuriylar.scss"
import {Loading} from "../../components/Loading/Loading"

export const Temuriylar = () => {
    const [todos, setTodos] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=> res.json())
    .then((data) =>{ console.log(data); setTodos( data)})
    .catch((err) => console.log(err))

  return (
    <ul className='temuriylar__page'>
      <h1>temuriylar o\Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid ex laborum blanditiis, voluptates necessitatibus numquam adipisci molestiae tempore reiciendis commodi perspiciatis reprehenderit rerum ipsum sapiente vel iusto. Minus maiores, voluptas quaerat amet, consequatur assumenda doloribus similique nesciunt adipisci tenetur porro. Esse tenetur quasi ab. Consequatur at sunt nesciunt expedita, quos alias odio officia cupiditate hic id adipisci amet architecto veniam. Aut facilis rem dolores nisi repellat velit assumenda tempore. Dicta iusto modi aliquam esse architecto ipsam nesciunt at nam culpa repudiandae ullam, ut, recusandae assumenda? Exercitationem quaerat eius explicabo deleniti natus provident odit quos ullam rerum, harum, cupiditate mollitia similique, ratione nesciunt esse quas. Est molestias rem, sequi fugit nesciunt beatae alias culpa saepe accusamus voluptas nisi sunt consequatur perferendis hic natus nostrum vero sit quod? Veniam iusto sit aspernatur voluptatem. Aliquid nisi esse dolores nostrum sequi harum, doloremque perferendis cupiditate</h1>
    </ul>
  )
}
