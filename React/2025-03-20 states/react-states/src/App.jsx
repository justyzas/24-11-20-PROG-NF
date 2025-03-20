// import States from "./States";

import { useState } from "react";

export default function App() {
	const [backgroundColor, setBackgroundColor] = useState("#bfc7e8");
	const [fontColor, setFontColor] = useState("#000000");
	const [text, setText] = useState("Submit");
	const [isItalic, setIsItalic] = useState(false);
	const [isUnderlined, setIsUnderlined] = useState(false);
	const [isLinedThrough, setIsLinedThrough] = useState(false);
	const [hasBorder, setHasBorder] = useState(true);
	const [borderWidthPx, setBorderWidthPx] = useState(1);

	const textDecoration = `${isUnderlined ? "underline" : ""} ${
		isLinedThrough ? "line-through" : ""
	}`;
	return (
		<main>
			<div>
				<label>
					<span>Fono spalva</span>
					<input
						type="color"
						value={backgroundColor}
						onChange={(e) => {
							setBackgroundColor(e.target.value);
						}}
					/>
				</label>
			</div>
			<div>
				<label>
					<span>Teksto spalva</span>
					<input
						type="color"
						value={fontColor}
						onChange={(e) => {
							setFontColor(e.target.value);
						}}
					/>
				</label>
			</div>
			<div>
				<label>
					<span>Tekstas</span>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</label>
			</div>
			<div>
				<label>
					<span>Italic</span>
					<input
						type="checkbox"
						checked={isItalic}
						onChange={(e) => {
							setIsItalic(e.target.checked); //true/false
						}}
					/>
				</label>
			</div>
			<div>
				<label>
					<span>Underline</span>
					<input
						type="checkbox"
						value={isUnderlined}
						onChange={(e) => {
							setIsUnderlined(e.target.checked); //true/false
						}}
					/>
				</label>
			</div>
			<div>
				<label>
					<span>Line through</span>
					<input
						type="checkbox"
						value={isLinedThrough}
						onChange={(e) => {
							setIsLinedThrough(e.target.checked); //true/false
						}}
					/>
				</label>
			</div>

			<div>
				<label>
					<span>Border</span>
					<input
						type="checkbox"
						checked={hasBorder}
						onChange={(e) => {
							setHasBorder(e.target.checked); //true/false
						}}
					/>
				</label>
			</div>

			<div>
				<label>
					<span>Border width (px)</span>
					<input
						type="number"
						value={borderWidthPx}
						disabled={!hasBorder}
						onChange={(e) => {
							const newValue = Number(e.target.value);
							if (isNaN(newValue) || newValue < 0) return setBorderWidthPx(0);

							setBorderWidthPx(newValue); //true/false
						}}
					/>
				</label>
			</div>

			<hr />
			<h4>Result</h4>
			<button
				style={{
					backgroundColor,
					color: fontColor,
					fontStyle: isItalic ? "italic" : "normal",
					textDecoration,
					border: hasBorder ? `${borderWidthPx}px solid black` : "none",
				}}
			>
				{text}
			</button>
		</main>
	);
}
