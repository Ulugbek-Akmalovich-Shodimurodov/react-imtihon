import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link  } from 'react-router-dom'
import { Card } from '../../Components/Card/Card';
import { Container } from '../../Components/container/Container';
import { ScrolItemList } from '../../Components/ScrolItemList/ScrolItemList';
import "./BookSinglePage.scss"
import { Image } from '../../Components/Image/Image';
import BookImg from "../../assets/img/book_img.png"
import Tirnoq from "../../assets/img/qushtirnoq.png"

export const BookSinglePage = () => {

    const [data, setData] = useState([]);

  useEffect(()=> {
    axios.get('https://book-service-layer.herokuapp.com/book/genreId/1')
    .then( function (response){
      setData(response.data);
      console.log(response.data);
    }).catch(function (error){
      console.log(error);
    })
    
  }, []);


  return (
    <Container>
        <div className="book-single-page">
            <div className="book-data">
            <div className="book-image__wrapper">
            <Image src={BookImg} className="book-image"/>
            </div>
            <div className='book-page__date'>
                <h2 className='book-title'>Book Title</h2>
                <p className='book__outhor'>Javlon Javliyev</p>
                <p>Sahifalar soni: <span>376</span></p>
                <p>Chop etilgan : <span>376</span></p>
                <p>Janri: <span>Tarixiy</span></p>
                <p>Nashriyot: <span>Nihol nashr</span></p>
                <p className='line-text'>To'liq ma'lumot <hr className='book-line'/></p>
                <p className='outhor-bio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam itaque quia eveniet, reprehenderit perferendis magni magnam velit sapiente ad repudiandae, debitis ut, molestias quasi omnis! Neque deleniti dolore, sapiente, magnam recusandae corporis modi consequatur sunt, nisi illo rem itaque obcaecati accusantium labore veniam reprehenderit. Ratione esse nam nesciunt, eum incidunt deserunt voluptatem temporibus eos? Eligendi veritatis minus labore voluptates enim quos, ipsam repudiandaenesciunt nihil. Quidem quam sapiente consequatur impedit repellendus!</p>
            </div>
            </div>
            <div className="div">
                <div className="book-card">
                    <Image src={Tirnoq} className="tirnoq"/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero corporis laudantium saepe atque itaque distinctio asperiores porro placeat aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsam in quos exercitationem hic, doloribus nulla nemo dignissimos fuga placeat?
                </div>
                <div className="book-card">
                <Image src={Tirnoq} className="tirnoq"/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero corporis laudantium saepe atque itaque distinctio asperiores porro placeat aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quod modi odit ullam provident sed praesentium dicta earum, dolorem repudiandae.
                </div>
            </div>
            <ScrolItemList>
                {data.map((e) => <Link to="/books"><Card data={e}/></Link>)}
            </ScrolItemList>
        </div>
    </Container>
  )
}
