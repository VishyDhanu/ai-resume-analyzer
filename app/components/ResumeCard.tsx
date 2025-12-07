import React from "react";
import { resume } from "react-dom/server";
import { resumes } from "../constants";
import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback, imagePath },
}) => {
  return (
    <Link
      to={`/resume/${id}`}
      className="resume-card animate-in fade-in duration 1000">
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          <h2 className="!text-black font-black break-words">{companyName}</h2>
          <h3 className="text-lg break-words text-grey-500">{jobTitle}</h3>
        </div>
        <div className="flex-shrink-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>
      <div className="gradient-border animate-in fade-in duration-1000">
        <div className="w-full h-full">
          <img
            src={imagePath}
            alt="resume"
            className="w-full h-[350px] max-sm:h-[300px] object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
