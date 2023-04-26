import React from "react";
import "./Register.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AxiosInstance from "../../../helpers/axios.helper";
import OTP from "../../components/OTP/OTP";

const Register = () => {
	const [formValues, setFormValues] = useState({
		phone: {
			phone_number: null,
			country_code: null,
		},
	});
	const [showOTP, setShowOTP] = useState(false);
	const [verifyOTP, setVerifyOTP] = useState({ });

	const history = useHistory();

	const updateOTP = (otp) => {
		setVerifyOTP({ ...verifyOTP, otp });
	};

	const handleInputChange = (event) => {
		if (["phone_number", "country_code"].includes(event.target.name)) {
			setFormValues({
				...formValues,
				phone: {
					...formValues.phone,
					[event.target.name]: event.target.value,
				},
			});
		} else {
			setFormValues({ ...formValues, [event.target.name]: event.target.value });
		}
	};

	const signupUser = async (event) => {
		event.preventDefault();
		try {
			const { data } = await AxiosInstance.post("/user/auth/signup", formValues);
			console.log("=== Response ==", data.data);
			setVerifyOTP({ ...verifyOTP,phone_number:formValues.phone.phone_number, otp_token: data.data.otp_token });
			setShowOTP(true)
		} catch (error) {
			alert(error.message);
		}
	};

	const submitOTP = () => {
		console.log("== OTP PAYLOAD ==", verifyOTP);
	};

	return (
		<section className="register">
			{!showOTP ? (
				<form className="register-form container flex" onSubmit={signupUser}>
					<div className="form-header">
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
							<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
							<rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
							<line x1="6" y1="6" x2="6.01" y2="6"></line>
							<line x1="6" y1="18" x2="6.01" y2="18"></line>
						</svg>
						<p>Enter your details to Register</p>
					</div>
					<div className="form-item">
						<input
							type="text"
							className="form-input"
							placeholder="email@example.com"
							name="email"
							value={formValues.email || ""}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-item">
						<input
							type="text"
							className="form-input"
							placeholder="first name"
							name="first_name"
							value={formValues.first_name || ""}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-item">
						<input
							type="text"
							className="form-input"
							placeholder="last name"
							name="last_name"
							value={formValues.last_name || ""}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-item">
						<span>
							<select
								className="form-input"
								name="country_code"
								onChange={handleInputChange}
								value={formValues.phone.c}
							>
								<option value="" disabled>
									Country
								</option>
								<option value="+1">+1</option>
								<option value="+91">+91</option>
							</select>
							<input
								type="text"
								className="form-input"
								placeholder="phone number"
								name="phone_number"
								value={formValues.phone.phone_number}
								onChange={handleInputChange}
							/>
						</span>
					</div>
					<div class="form-item">
						<input
							type="password"
							className="form-input"
							placeholder="password"
							name="password"
							value={formValues.password || ""}
							onChange={handleInputChange}
						/>
					</div>
					<div class="form-item">
						<button className="btn-primary" type="submit">
							Sign Up
						</button>
					</div>
					<div className="form-footer">
						Already have an account? <Link to="/login">Login</Link>
					</div>
				</form>
			) : (
				<>
					<OTP updateOTP={updateOTP} />
					<button className="btn-primary" onClick={submitOTP}>
						Verify OTP
					</button>
				</>
			)}
		</section>
	);
};

export default Register;
