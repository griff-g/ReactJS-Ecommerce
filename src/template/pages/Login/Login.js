import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import AxiosInstance from "../../../helpers/axios.helper";

const Login = () => {
	const [formValues, setFormValues] = useState({});

	const handleInputChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const loginUser = async (e) => {
		e.preventDefault();
		try {
			const { data } = await AxiosInstance.post(
				"/user/auth/login/username-password",
				formValues
			);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<section className="login">
			<form className="form-login container flex" action="" onSubmit={loginUser}>
				<div className="form-header">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#000000"
						strokeWidth="2.3"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
						<circle cx="12" cy="7" r="4"></circle>
					</svg>
					<p>Login to access your dashboard</p>
				</div>
				<div className="form-item">
					<input
						type="text"
						className="form-input"
						placeholder="email@example.com"
						name="username"
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-item">
					<input
						type="password"
						className="form-input"
						placeholder="password"
						name="password"
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-item">
					<Button btnType={"primary"} btnText={"Login"} />
				</div>
				<div className="form-footer">
					Don't have an account? <Link to="/register">Sign Up</Link>
				</div>
				<div className="form-footer">
					<a href="/" style={{ fontSize: "smaller" }}>
						Forgot password?
					</a>
				</div>
			</form>
		</section>
	);
};

export default Login;
