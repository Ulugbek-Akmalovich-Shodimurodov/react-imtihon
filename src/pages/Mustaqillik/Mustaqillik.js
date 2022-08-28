import React, { useEffect, useState } from 'react'
import "../Temuriylar/Temuriylar.scss"
import axios from 'axios';
import { OuthorCard } from '../../Components/OuthorCard/OuthorCard';

export const Mustaqillik = () => {


    const [data, setData] = useState([]);

  useEffect(()=> {
    axios
    .get('https://book-service-layer.herokuapp.com/author/genreId/4')
    .then( function (response){
      setData(response.data);
    }).catch(function (error){
      console.log(error);
    })
    
  }, []);


  return (
    <ul className='temuriylar__page'>
      <div className='card-list'>
      {data.map((e) =>   <OuthorCard key={e.id} data={e} />)}
    </div>
    </ul>
  )
}
