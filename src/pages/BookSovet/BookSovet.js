import React, { useEffect, useState } from 'react'
import "../Temuriylar/Temuriylar.scss"
import axios from 'axios';
import { Card } from '../../Components/Card/Card';
import { Link } from 'react-router-dom';

export const BookSovet = () => {


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
    <ul className='temuriylar__page'>
      <div className='card-list'>
    {data.map((e) => <Link to={`/book-single/${e.title}`}><Card key={e.id} data={e} /></Link>) }
    </div>
    </ul>
  )
}
