import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

const Layout = ({ children, showNav }) => {
	return (
		<>
			{showNav && <Navbar />}
			<div class="wrapper grid">
				{/* <div className={showNav ? 'visible':'invisible'}>
				<Navbar />
			</div> */}
				{children}
			</div>
		</>
	);
};

export default Layout;
