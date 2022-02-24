import React, { useState } from "react";

function About({ darkMode }) {
	const [textarea, setTextarea] = useState("");
	const [noOfWords, setNoOfWords] = useState(0);
	const [displayText, setDisplayText] = useState("");
	return (
		<div className="container p-2">
			<textarea
				onChange={(e) => {
					setTextarea(e.target.value);
				}}
				value={textarea}
				placeholder="Enter Your text here"
				className={`form-control ${
					darkMode ? "bg-dark text-primary" : "bg-light text-dark"
				}`}
				id="text-area"
				rows="3"
			/>
			<button
				type="button"
				className="btn btn-primary m-2"
				onClick={() => {
					setTextarea(textarea.trim().toUpperCase());
				}}
			>
				Convert To UpperCase
			</button>
			<button
				type="button"
				className="btn btn-secondary m-2"
				onClick={() => {
					setNoOfWords(textarea.trim().split(" ").length);
				}}
			>
				Count Words
			</button>
			<button
				type="button"
				className="btn btn-success m-2"
				onClick={() => {
					setDisplayText(textarea);
				}}
			>
				Show Text
			</button>
			<h6 className={`${darkMode ? "text-warning" : "text-dark"}`}>
				No of Words: {noOfWords}
			</h6>
			<p className={`${darkMode ? "text-light" : "text-dark"}`}>
				{displayText}
			</p>
		</div>
	);
}

export default About;
