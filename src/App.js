import { useAuth } from './hooks/useAuth';
import { Public } from './Public';
import { Private } from './Private';
import "./assets/styles/main.scss"
import "./assets/styles/general.scss"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { language } from "./language/language"

i18n.use(initReactI18next).init(

	{
		fallbackLng: 'en',
		interpolation: {
		  escapeValue: false,
		},
		resources: {
		  en: { translation: language.en },
			uz: {translation: language.uz},
			ru: {translation: language.ru}
		}}

)

function App() {
	const [token] = useAuth();
	console.log(token);
	if (token) {
		return <Private />;
	}
	return <Public />;
}

export default App;
