import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function TabsApp() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      console.log(jobs);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => fetchJobs(), []);

  // ! This will not work!
  // ! jobs must be loaded. or all properties would be undefined.
  // const { company, dates, duties, title } = jobs[value];

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  // ! jobs are loaded after the if (loading) statement.
  // ! This is OK. Destructuring completed, ready to proceed now.
  const { company, dates, duties, title } = jobs[value];
  console.log(company, dates, duties, title);

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default TabsApp;
