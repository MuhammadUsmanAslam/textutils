import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div className={`app bg-${darkMode ? "dark" : "light"}`}>
			<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
			<Routes>
				<Route
					exact
					path="/"
					element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
				/>
				<Route exact path="/about" element={<About darkMode={darkMode} />} />
			</Routes>
		</div>
	);
}

export default App;
