import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import PersonalInformation from "./Components/SubPages/PersonalInformation/PersonalInformation";
import AccountSetting from "./Components/SubPages/AccountSettings/AccountSettings";
import Notification from "./Components/SubPages/Notifications/Notification";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="personal-information" element={<PersonalInformation />} />
					<Route path="account-security" element={<AccountSetting />} />
					<Route path="notification" element={<Notification />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
