const Job = require("../models/jobs.js");

exports.createNewJob = (req, res) => {
  const { name, company, intro, duties, skills, salary, benefits } = req.body;

  const jobs = new Job({
    name,
    company,
    intro,
    duties,
    skills,
    salary,
    benefits,
  });

  jobs.save((error, job) => {
    if (error) res.status(400).json({ error });
    if (job) res.status(201).json({ job, status: "Pending" });
  });
};

exports.getAllJobs = (req, res) => {
  Job.find({}).exec((error, job) => {
    error && res.status(400).json({ error });

    job && res.status(200).json(job);
  });
};

exports.getJobsBySearch = (req, res) => {
  const search = req.query.search;
  console.log(search);
  Job.find({ "job.category": { $regex: search, $options: "i" } }).exec(
    (error, job) => {
      error && res.status(400).json({ error });

      job && res.status(200).json(job);

      console.log(job);
    }
  );
};
