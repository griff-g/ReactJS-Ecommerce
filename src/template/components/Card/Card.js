import React from "react";
import "./Card.css";

const Card = ({heading,description,imageUrl}) => {
	return (
		<div className="image-card flex container">
			<figure>
				<img src={imageUrl} alt="Trulli" />
				<figcaption className="flex">
						<p className="m-0 p-0">
                            <strong>{heading}</strong>
                        </p>
                        <small className="m-0 p-0">This {description}</small>
				</figcaption>
			</figure>
		</div>
	);
};

export default Card;
