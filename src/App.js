import { Signup } from "./pages/SignUp/Signup";
import "./assets/scss/main.scss"
import { SignIn } from "./pages/SignIn/SignIn";
import { MyProfile } from "./pages/MyProfile/MyProfile";
import { Security } from "./pages/Security/Security";
import { Settings } from "./pages/Settings/Settings";
import { Container } from "./components/container/Container";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Container>
        
        <Home/>
        <Signup/>
        <SignIn/>
        <MyProfile/>
        <Security/>
        <Settings/>
      </Container>
    </div>
  );
}

export default App;
