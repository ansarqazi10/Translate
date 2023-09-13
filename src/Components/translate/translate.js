import React, { useState, useEffect } from "react";
import translate from "translate";

const Translator = ({ word, lang }) => {
	const [result, setResult] = useState("Loading...");

	useEffect(() => {
		translate(word, { to: lang })
			.then((translation) => {
				setResult(translation);
			})
			.catch((error) => {
				console.error("Something went wrong", error);
			});
	}, [word, lang]);

	return (
		<div>
			<p>
				The translation of "{word}" to "{lang}" is:
			</p>
			<h1>{result}</h1>
		</div>
	);
};

export default Translator;
