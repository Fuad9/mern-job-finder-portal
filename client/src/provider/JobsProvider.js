import React, { useContext, useEffect, useState } from "react";
import { JobsContext } from "../context/JobsContext";
import { useQuery } from "react-query";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function JobsProvider({ children }) {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () =>
    await (await fetch(`${process.env.REACT_APP_BASE_URL}/getAllJobs`)).json();

  const { data, isLoading, error } = useQuery("getAllJobs", getJobs);

  useEffect(() => {
    setJobs(data);
  }, [data]);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <JobsContext.Provider value={{ jobs }}>{children}</JobsContext.Provider>
  );
}

export const useJobs = () => useContext(JobsContext);
