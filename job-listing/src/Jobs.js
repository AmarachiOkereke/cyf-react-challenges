import React from "react";
import Button from "./Button";

const Jobs = ({ job }) => {
  return (
    <div >
      <div>
        <img src={job.logo} alt="" />
      </div>
      <div>
        <p>
          {job.company}
          {job.new ? <button>NEW!</button> : ""}
          {job.featured ? <button>FEATURED</button> : ""}
        </p>

        {job.position}
        <p>
          {job.postedAt}.{job.location}.{job.contract}
        </p>
      </div>
      <div>
        <Button skill={job.role} />
        <Button skill={job.level} />
       {job.languages.map((language, index) => (
        <Button key={index} skill ={language} />
        ))}
      </div>
    </div>
  );
}
export default Jobs;