import React from "react";
import { useJobs } from "../provider/JobsProvider";
import { Form } from "react-bootstrap";
import adminDashboardStyles from "../styles/JobSeekerDashboard.module.scss";
import HeaderMain from "./HeaderMain";

export default function AdminDashboard() {
  const { jobs } = useJobs();

  const handleStatus = async (e, _id) => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/jobStatusUpdate`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: _id,
          status: e.target.value,
        }),
      }).then(() => {
        alert("status updated successfully");
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <>
      <HeaderMain>
        <h1>Career Statistics</h1>
      </HeaderMain>
      <section className="container">
        {jobs?.map(
          (elem) =>
            elem.status === "Pending" && (
              <>
                <div className={adminDashboardStyles.dashboardItemBySearch}>
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

                <Form.Control
                  as="select"
                  className="text-danger"
                  onChange={(e) => handleStatus(e, elem._id)}
                  style={{ width: "6rem" }}
                >
                  <option selected style={{ color: "#FF4545" }}>
                    {elem.status}
                  </option>
                  <option style={{ color: "#009444" }}>Done</option>
                </Form.Control>
              </>
            )
        )}
      </section>
    </>
  );
}
