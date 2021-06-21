import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import jobpostStyles from "../styles/PostJobs.module.scss";
import axios from "axios";

export default function PostJobs() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/createNewJob`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.status === 200) {
        alert("Job Posted successfully");
        setTimeout(() => {
          history.push("/");
        }, 3000);
      } else {
        alert("Something went wrong, please try again");
      }
    } catch (err) {
      console.log(err.message);
      throw new Error(err);
    }
  });

  return (
    <section className="container">
      <div className={jobpostStyles.jobFormContainer}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Employer Name"
            {...register("employer", { required: true })}
          />
          <input
            type="text"
            placeholder="Position"
            {...register("position", { required: true })}
          />
          <input
            type="text"
            placeholder="Emplyment Status"
            {...register("employmentstatus", { required: true })}
          />
          <input
            type="text"
            placeholder="Experience"
            {...register("experience", { required: true })}
          />
          <input
            type="text"
            placeholder="Location"
            {...register("location", { required: true })}
          />
          <input
            type="text"
            placeholder="Category"
            {...register("category", { required: true })}
          />
          <input
            type="text"
            placeholder="Company"
            {...register("company", { required: true })}
          />
          <input
            type="text"
            placeholder="Salary"
            {...register("salary", { required: true })}
          />
          <textarea
            type="text"
            placeholder="Intro"
            {...register("intro", { required: true })}
          />
          <textarea
            type="text"
            placeholder="Duties"
            {...register("duties", { required: true })}
          />
          <textarea
            type="text"
            placeholder="Skills Required"
            {...register("skills", { required: true })}
          />
          <textarea
            type="text"
            placeholder="Benefits"
            {...register("benefits", { required: true })}
          />

          <button type="submit">Post</button>
        </form>
      </div>
    </section>
  );
}
