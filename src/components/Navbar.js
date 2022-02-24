import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${
				darkMode ? "dark" : "light"
			} bg-${darkMode ? "dark" : "light"}`}
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					TextUtils
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="page">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link active" aria-current="page">
								About
							</Link>
						</li>
					</ul>
					<div className="form-check form-switch">
						<input
							onClick={() => {
								setDarkMode(!darkMode);
							}}
							className="form-check-input"
							type="checkbox"
							id="flexSwitchCheckDefault"
						/>
						<label
							className={`form-check-label text-${darkMode ? "light" : "dark"}`}
							htmlFor="flexSwitchCheckDefault"
						>
							Dark Mode
						</label>
					</div>
				</div>
			</div>
		</nav>
	);
}
