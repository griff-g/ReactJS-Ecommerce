import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function OTP({handleOTP}) {
  const [otp, setOtp] = useState('');

  console.log("=== OTP ==",otp
  );

  const updateOTP = (otp)=>{
    return otp
  }

  return (<>
    
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span></span>}
      renderInput={(props) => <input {...props} />}
    />
    <button>Submit</button>
  </>
  );
}