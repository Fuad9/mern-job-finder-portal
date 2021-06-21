const express = require("express");

const {
  getAllJobs,
  createNewJob,
  getJobsBySearch,
} = require("../controllers/jobs.js");

const router = express.Router();

router.post("/jobs/createNewJob", createNewJob);
router.get("/jobs/getAllJobs", getAllJobs);
router.get("/jobs/getJobsBySearch", getJobsBySearch);

module.exports = router;
