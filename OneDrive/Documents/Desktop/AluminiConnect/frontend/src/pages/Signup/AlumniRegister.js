import { useState } from "react";
import "./AlumniRegister.css"; 



function AlumniRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    batch: "",
    course: "",
    current_job: "",
    company: "",
    location: "",
    linkedin: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5050/api/alumni/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("Backend Response:", data);

    if (data.message) {
      alert(" Alumni registered successfully!");
    } else {
      alert(" Error registering alumni!");
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="register-title">🏢 Alumni Registration</h2>
      <input className="register-input" placeholder="Name" onChange={e => setForm({...form, name: e.target.value})}/>
      <input className="register-input" placeholder="Email" type="email" onChange={e => setForm({...form, email: e.target.value})}/>
      <input className="register-input" placeholder="Password" type="password" onChange={e => setForm({...form, password: e.target.value})}/>
      <input className="register-input" placeholder="Batch Year" onChange={e => setForm({...form, batch: e.target.value})}/>
      <input className="register-input" placeholder="Course" onChange={e => setForm({...form, course: e.target.value})}/>
      <input className="register-input" placeholder="Current Job" onChange={e => setForm({...form, current_job: e.target.value})}/>
      <input className="register-input" placeholder="Company" onChange={e => setForm({...form, company: e.target.value})}/>
      <input className="register-input" placeholder="Location" onChange={e => setForm({...form, location: e.target.value})}/>
      <input className="register-input" placeholder="LinkedIn URL" onChange={e => setForm({...form, linkedin: e.target.value})}/>
      <button className="register-btn" type="submit">Register Alumni</button>
    </form>
  );
}

export default AlumniRegister;

