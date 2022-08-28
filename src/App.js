import { useAuth } from './hooks/useAuth';
import { Public } from './Public';
import { Private } from './Private';
import "./assets/styles/main.scss"
import "./assets/styles/general.scss"

function App() {
	const [token] = useAuth();
	console.log(token);
	if (token) {
		return <Public />;
	}
	return <Private />;
}

export default App;
