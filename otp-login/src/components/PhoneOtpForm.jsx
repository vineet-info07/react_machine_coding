import { useState } from "react";
import OtpInput from "./OtpInput";

export default function PhoneOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    // Phone validation
    const regex = /[^0-9]/g;
    if (
      phoneNumber.length > 10 ||
      phoneNumber.length < 10 ||
      regex.test(phoneNumber)
    ) {
      alert("Invalid Phone Number.");
      return;
    }
    // Show OTP
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
}
