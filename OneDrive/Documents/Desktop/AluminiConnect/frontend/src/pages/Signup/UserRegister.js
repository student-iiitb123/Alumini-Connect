import { useState } from "react";
import "./UserRegister.css"; 

function UserRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
    year: "",
    skills: "",
    interests: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      year: Number(form.year),
      skills: form.skills.split(",").map(s => s.trim()),
      interests: form.interests.split(",").map(i => i.trim())
    };

    const res = await fetch("http://localhost:5050/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("Backend Response:", data);

    if (data.message) {
      alert(" Student registered successfully!");
    } else {
      alert(" Error registering student!");
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="register-title">🎓 Student Registration</h2>
      <input className="register-input" placeholder="Name" onChange={e => setForm({...form, name: e.target.value})}/>
      <input className="register-input" placeholder="Email" type="email" onChange={e => setForm({...form, email: e.target.value})}/>
      <input className="register-input" placeholder="Password" type="password" onChange={e => setForm({...form, password: e.target.value})}/>
      <input className="register-input" placeholder="Course" onChange={e => setForm({...form, course: e.target.value})}/>
      <input className="register-input" placeholder="Year (e.g. 3)" type="number" onChange={e => setForm({...form, year: e.target.value})}/>
      <input className="register-input" placeholder="Skills (comma separated)" onChange={e => setForm({...form, skills: e.target.value})}/>
      <input className="register-input" placeholder="Interests (comma separated)" onChange={e => setForm({...form, interests: e.target.value})}/>
      <button className="register-btn" type="submit">Register Student</button>
    </form>
  );
}

export default UserRegister;
