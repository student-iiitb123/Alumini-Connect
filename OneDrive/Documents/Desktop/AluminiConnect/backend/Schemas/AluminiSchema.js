const mongoose = require("mongoose");
const AluminiSchema = mongoose.Schema({
   
   name: String,
   email: String,
   password: String,
   batch: Number,       
   course: String,       
   current_job: String,  
   company: String,
   location: String,
   linkedin: String,
//    contributions: {
//        jobs_posted: [JobId],
//        mentorship_sessions: [SessionId],
//        donations: [DonationId]
//    },
   createdAt: Date,
   updatedAt: Date

})

module.exports = mongoose.model('Alumini',AluminiSchema);
