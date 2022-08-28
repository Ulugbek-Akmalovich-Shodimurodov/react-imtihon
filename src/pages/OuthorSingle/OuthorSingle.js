import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../Components/Card/Card';
import { Container } from '../../Components/container/Container';
import { ScrolItemList } from '../../Components/ScrolItemList/ScrolItemList';
import "./OuthorSingle.scss"
import OuthorImg from "../../assets/img/author_img.png"
import { Image } from '../../Components/Image/Image';

export const OuthorSingle = () => {


    const [data, setData] = useState([]);

  useEffect(()=> {
    axios.get('https://book-service-layer.herokuapp.com/book/genreId/3')
    .then( function (response){
      setData(response.data);
      console.log(response.data);
    }).catch(function (error){
      console.log(error);
    })
    
  }, []);


  return (
    <Container>
        <div className="single-page">
            <div className="image-wrapper">
            <Image src={OuthorImg} className="outhor-image"/>
            <span className='outhor-year'>1900-1980</span>
            </div>
            <div className='outhor-page__date'>
                <h2 className='outhor-name'>Outhor Name</h2>
                <p className='outhor-bio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam itaque quia eveniet, reprehenderit perferendis magni magnam velit sapiente ad repudiandae, debitis ut, molestias quasi omnis! Neque deleniti dolore, sapiente, magnam recusandae corporis modi consequatur sunt, nisi illo rem itaque obcaecati accusantium labore veniam reprehenderit. Ratione esse nam nesciunt, eum incidunt deserunt voluptatem temporibus eos? Eligendi veritatis minus labore voluptates enim quos, ipsam repudiandaenesciunt nihil. Quidem quam sapiente consequatur impedit repellendus!</p>
            <ScrolItemList>
                {data.map((e) => <Link to="/books"><Card data={e}/></Link>)}
            </ScrolItemList>
            </div>
        </div>
    </Container>
  )
}
