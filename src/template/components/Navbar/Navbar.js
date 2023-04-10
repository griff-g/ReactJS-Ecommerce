import React from "react";
import Button from "../Button/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav class="nav container">
			<ul class="nav-list flex">
				<li class="nav-item">
					<Link to="/home">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#000000"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
							<polyline points="9 22 9 12 15 12 15 22"></polyline>
						</svg>
					</Link>
				</li>
				<li class="nav-item">
					<Link to="/about">About</Link>
				</li>
				<li class="nav-item">
					<Link to="/shop">Shop</Link>
				</li>
				<li class="nav-item">
					<Link to="/contact">Contact</Link>
				</li>
				<Link to="/login" className="nav-item">
					<Button btnText={"Login"} btnType={"primary"} />
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
