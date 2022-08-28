import "./assets/scss/main.scss"
import { useAuth } from "./Hooks/useAuth";
import { Private } from "./Private";
import { Public } from "./Public";

function App() {
	const [token] = useAuth();
	console.log(token);
	if (token) {
    return <Private />;
	}
  return <Public />;
}

export default App;
