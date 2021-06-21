import React, { useCallback, useEffect, useState } from "react";
import jobSeekerDashboardStyles from "../styles/JobSeekerDashboard.module.scss";
import { useJobs } from "../provider/JobsProvider";
import HeaderMain from "./HeaderMain";

export default function JobSeekerDashboard() {
  const { jobs } = useJobs();
  const [search, setSearch] = useState("");
  const [jobsBySearch, setjobsBySearch] = useState([]);

  const getFilteredJobs = useCallback(async () => {
    await fetch(
      `${process.env.REACT_APP_BASE_URL}/getJobsBySearch?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setjobsBySearch(data);
      });
  }, [search]);

  useEffect(() => {
    getFilteredJobs();
  }, [getFilteredJobs]);

  return (
    <>
      <HeaderMain>
        <h1>Career Statistics</h1>
      </HeaderMain>

      <section
        className={`container ${jobSeekerDashboardStyles.dashboardContainer}`}
      >
        <input
          type="text"
          onBlur={(e) => setSearch(e.target.value)}
          placeholder="Search by category...i.e. Web, Graphics, Mobile"
        />
        <button>Search</button>

        {jobsBySearch == false ? (
          <h4>Not found</h4>
        ) : (
          jobsBySearch.map(
            (elem) =>
              elem.status === "Done" && (
                <div className={jobSeekerDashboardStyles.dashboardItemBySearch}>
                  <div>
                    <h1>{elem.job.position}</h1>
                    <div>
                      <h5>
                        <i
                          class="bx bx-shopping-bag"
                          style={{ color: "#1000ff" }}
                        ></i>
                        {elem.job.company}
                      </h5>
                      <h5>
                        <i
                          class="bx bxs-location-plus"
                          style={{ color: "#1000ff" }}
                        ></i>
                        {elem.job.location}
                      </h5>
                      <h5>
                        <i
                          class="bx bx-time-five"
                          style={{ color: "#1000ff" }}
                        ></i>
                        {elem.job.employmentstatus}
                      </h5>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h1>Job Description</h1>
                      <h4>About the Job: {elem.job.intro}</h4>
                      <h4>Day to day duties: {elem.job.duties}</h4>
                      <h4>Skills Required: {elem.job.skills}</h4>
                      <h4>Salary: {elem.job.salary}</h4>
                      <h4>Benefits: {elem.job.benefits}</h4>
                    </div>
                    <div>
                      <h1>Job Summary</h1>
                      <h4>
                        Published on: {new Date(`${elem.date}`).toString()}
                      </h4>
                      <h4>Posted by: {elem.job.employer}</h4>
                      <h4>Experience: {elem.job.experience}</h4>
                      <h4>Salary: {elem.job.salary}</h4>
                    </div>
                  </div>
                </div>
              )
          )
        )}
      </section>
    </>
  );
}
