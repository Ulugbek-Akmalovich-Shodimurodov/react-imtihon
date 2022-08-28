import React from 'react'
import { Routes, Route} from "react-router-dom"
import { PrivateHeader } from './Components/PrivateHeader/PrivateHeader'
import { Home } from './pages/Home/Home'
import { Books } from "./pages/Books/Books"
import { MyProfile } from "./pages/MyProfile/MyProfile"
import { AddBook } from "./pages/AddBook/AddBook"
import { AddOuthor } from "./pages/AddOuthor/AddOuthor"
import { Login } from './pages/Login/Login'
import { OuthorSingle } from './pages/OuthorSingle/OuthorSingle'
import { BookSinglePage } from "./pages/BookSinglePage/BookSinglePage"

export const Private = () => {
  return (

    <Routes>
      <Route index element={
        <>
          <PrivateHeader/>
          <Home/>
        </>} />
        <Route path='/home/*' element={<>
          <PrivateHeader/>
          <Home/>
        </>}/> 
        <Route path='/books/*' element={<>
          <PrivateHeader/>
          <Books/>
        </>}/> 
        <Route path='/my-profile/*' element={<MyProfile/>}/>
        <Route path='/add-outhor/*' element={<AddOuthor/>}/>
        <Route path='/add-book/*' element={<AddBook/>}/>
        <Route path='/signin/*' element={<Login/>}/>
        <Route path='/single/:id' element={<OuthorSingle/>}/>
        <Route path='/book-single/:title' element={<BookSinglePage/>}/>
      
    </Routes>
  )
}
