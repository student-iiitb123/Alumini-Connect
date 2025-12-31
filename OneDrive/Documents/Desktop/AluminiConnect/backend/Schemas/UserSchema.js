const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  course: String,
  year: Number,
  skills: [String],
  interests: [String],

  jobs_applied: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  mentors_connected: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mentor" }],
  scholarships_applied: [{ type: mongoose.Schema.Types.ObjectId, ref: "Scholarship" }],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);


