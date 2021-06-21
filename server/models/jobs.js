const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    employer: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    employmentstatus: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    intro: {
      type: String,
      required: true,
    },
    duties: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    benefits: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
