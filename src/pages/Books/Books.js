import { Card } from '../../components/Card/Card'
import React, { useEffect, useState } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap"
import { Carusel } from '../../components/Carusel/Carusel'
import { Categories } from '../../components/Categories/Categories'
import { Search } from '../../components/Search/Search'
import "./Books.scss"
import { Container } from '../../components/container/Container'
import axios from 'axios'

export const Books = () => {

  const [data, setData] = useState([]);

  useEffect(()=> {
    axios.get('https://book-service-layer.herokuapp.com/book/genreId/3')
    .then( function (response){
      setData(response.data);
    }).catch(function (error){
      console.log(error);
    })
    
  }, []);

  return (
    <Container>
      <div className='books__page'>
      <Carusel/>
    <Search/>
<h3 className='books_page_text'>Asosiy kategoriyalar</h3>
    <Categories/>
    <div className='card-list'>
    {data.map((e) => <Card key={e.id} data={e} />) }
    </div>
</div>
</Container>
  )
}
