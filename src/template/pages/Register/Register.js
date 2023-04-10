import React from "react";
import "./Register.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


const Register = () => {
	return (
		<section class="register">
			<form class="register-form container flex" action="">
				<div class="form-header">
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
				<div class="form-item">
					<input type="text" class="form-input" placeholder="username" />
				</div>
				<div class="form-item">
					<input type="text" class="form-input" placeholder="first name" />
				</div>
				<div class="form-item">
					<input type="text" class="form-input" placeholder="last name" />
				</div>
				<div class="form-item">
					<input type="text" class="form-input" placeholder="email@example.com" />
				</div>
				<div class="form-item">
					<span>
						<select className="form-input" name="" id="">
							<option value="" disabled>Country</option>
							<option value="test">test</option>
							<option value="test">test2</option>
						</select>
					<input type="text" class="form-input" placeholder="phone number" />
					</span>
				</div>
				<div class="form-item">
					<input type="password" class="form-input" placeholder="password" />
				</div>
				<div class="form-item">
					<button class="btn-primary" type="submit">
						Sign Up
					</button>
				</div>
				<div class="form-footer">
					Already have an account? <Link to="/login">Login</Link>
				</div>
			</form>
		</section>
	);
};

export default Register;
