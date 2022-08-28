import { Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header"
import { Books } from "./pages/Books/Books"
import {AddOuthor } from "./pages/AddOuthor/AddOuthor"
import {AddBook } from "./pages/AddBook/AddBook"
// import { SignIn } from "./pages/SignIn/SignIn";
import { Public } from "./Public";
// import { Settings } from "./pages/Settings/Settings";
import { MyProfile } from "./pages/MyProfile/MyProfile";
import { Temuriylar } from "./pages/Temuriylar/Temuriylar";

export const Private = () =>{
    return (
        <Routes>
      <Route path='/' element={
        <>
          <Header/>
          <Home/>
        </>} />
      
    </Routes>
    )
}