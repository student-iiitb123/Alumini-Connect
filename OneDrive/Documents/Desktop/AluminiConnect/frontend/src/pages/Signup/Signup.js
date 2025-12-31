import { useState } from "react";
import AlumniRegister from "./AlumniRegister";
import UserRegister from "./UserRegister";
import "./Signup.css";

function SignupPage() {
  const [choice, setChoice] = useState("");

  return (
    <div className="signup-container">
      {choice === "" && (
        <div className="choice-card">
          <h2 className="signup-title">Join the Network</h2>
          <p className="signup-subtitle">Choose your role to get started</p>
          <div className="choice-buttons">
            <button className="choice-btn alumni" onClick={() => setChoice("alumni")}> Alumni</button>
            <button className="choice-btn student" onClick={() => setChoice("user")}> Student</button>
          </div>
        </div>
      )}

      {choice === "alumni" && (
        <div className="form-card">
       
          <AlumniRegister />
          <button className="back-btn" onClick={() => setChoice("")}>⬅ Back</button>
        </div>
      )}

      {choice === "user" && (
        <div className="form-card">
        
          <UserRegister />
          <button className="back-btn" onClick={() => setChoice("")}>⬅ Back</button>
        </div>
      )}
    </div>
  );
}

export default SignupPage;

