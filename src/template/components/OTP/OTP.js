import React, { useState,useEffect } from "react";
import OtpInput from "react-otp-input";

export default function OTP({ updateOTP }) {
	const [otp, setOtp] = useState("");
	
  useEffect(()=>{
    updateOTP(otp)
  },[otp])

	return (
		<>
			<OtpInput
				value={otp}
				onChange={setOtp}
				numInputs={6}
				renderSeparator={<span></span>}
				renderInput={(props) => <input {...props} />}
			/>
		</>
	);
}
