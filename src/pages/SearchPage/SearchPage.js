import React, { useEffect, useState } from 'react'
import "./SearchPage.scss"
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { OuthorCard } from '../../Components/OuthorCard/OuthorCard';
import useDebounce from "../../hooks/useDebounce"

export const SearchPage = ({children}) => {

    const {searchOuthor} = useParams();
    
    const debouncedValue = useDebounce(searchOuthor, 750)

    const [searchouthor, setSearchouthor] = useState({
        isLoading: true,
        isError: false,
        data:{}
    })
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/author/search?author=' + debouncedValue).then((res)=> setSearchouthor({
            isLoading: false,
            isError: false,
            data: res.data
        })).catch((err) => setSearchouthor({
            ...searchouthor,
            isLoading: false,
            isError: true,
        }))
    }, [debouncedValue])

  return (
  
        <div className='search-page'>{searchouthor.data.length &&     searchouthor.data.map((e)=> <OuthorCard key={e.id} data={e} />)}</div>
   
  )
}
