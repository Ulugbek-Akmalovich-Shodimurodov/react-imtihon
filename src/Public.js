import { Routes, Route} from "react-router-dom";

import { SignIn } from "./pages/SignIn/SignIn";
import { Signup } from "./pages/SignUp/Signup"

export const Public = () =>{
    return (

        <>
        {/* <SignIn/>
        <Signup/> */}
        <Routes>
            <Route path="/public" element={<SignIn/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route path="*" element={<>Error 404</>}/>
        </Routes>
        </>

    )
}