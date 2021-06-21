import React from "react";
import JobSeekerLogin from "./Auth/EmployerLogin";

export default function Home() {
  return (
    <>
      <section className="container">
        <JobSeekerLogin />
      </section>
    </>
  );
}
