import React from "react";
import "./Slider.css";
import Card from "../Card/Card";
import slider from "../../../utils/slider";
import { useState } from "react";

const Slider = () => {
	const [slides, setSlide] = useState(slider);
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(4);
	const next = () => {
		
		setStart((prev) => prev + 1);
		setEnd((prev) => prev + 1);
		const updatesSlides = [...slides];
		setSlide(
			updatesSlides.map((slide, index) => {
				if (index === end) {
					slide.active = true;
				}
				return slide
			})
		);
	};
	const prev = () => {
		// setStart((prev) => prev - 1);
		// setEnd((prev) => prev - 1);
	};
	// originial [1,2,3,4,5]
	// next [2,3,4,5,6]
	// prev [0,1,2,3,4]
	return (
		<div className="slider flex">
			<div className="prev" onClick={prev}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#fff"
					strokeWidth="1"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="10" />
					<path d="M12 8l-4 4 4 4M16 12H9" />
				</svg>
			</div>
			<div className="next" onClick={next}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#fff"
					strokeWidth="1"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="10" />
					<path d="M12 8l4 4-4 4M8 12h7" />
				</svg>
			</div>
			{slides
				.map((slide, id) => {
					if (!slide.active) return <></>;
					return (
						<Card
							imageUrl={slide.image}
							heading={slide.title}
							description={slide.description}
						/>
					);
				})
				.slice(start, end)}
		</div>
	);
};

export default Slider;
