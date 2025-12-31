require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Alumini = require("./Schemas/AluminiSchema");
 const User = require("./Schemas/UserSchema")
 const cors = require("cors");
 
const app = express();
const port = 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




app.post("/alumini", async (req, res) => {
  try {
    const newAlumini = new Alumini({
      name: "John Doe",
      email: "john@example.com",
      password: "hashedpassword",
      batch: 2020,
      course: "B.Tech",
      current_job: "Engineer",
      company: "ABC Corp",
      location: "Delhi",
      linkedin: "https://linkedin.com/in/johndoe",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const savedAlumini = await newAlumini.save();
    res.status(201).json(savedAlumini);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post("/api/alumni/register", async (req, res) => {
  try {
    const newAlumini = new Alumini(req.body);
    await newAlumini.save();
    res.json({ message: "Alumini registered successfully", alumini: newAlumini });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




app.post("/api/users/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: "Student registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/login",async(req,res) => {
  const {email,password,role} = req.body;
  try{
    if(role === "alumni"){
      account  = Alumini.findOne({email,password});
    }
    else{
      account = await User.findOne({email,password});
    }

    if(!account) return res.status(400).json({error : "Invalid credentials "});
    res.json({
      message : "login successfully",user: account
    })
  }
  catch(err){
    res.status(500).json({
      error : error.message
    });
  }
})



async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to MongoDB");

    app.listen(port, () => {
      console.log(` Server running on port ${port}`);
    });
  } catch (error) {
    console.error(" MongoDB connection error:", error);
  }
}

startServer();
